import { CreateStreamCommand, Kinesis } from "@aws-sdk/client-kinesis";
import { NodeHttp2Handler } from "@aws-sdk/config/requestHandler";
import { getEndpointFromInstructions } from "@smithy/core/endpoints";
import { type MetadataBearer } from "@smithy/types";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

describe("@aws-sdk/client-kinesis", () => {
  const STREAM_NAME = `aws-sdk-js-v3-e2e-test-${crypto.randomUUID()}`;
  const SHARD_COUNT = 1;
  const SESSION_CONCURRENCY = 7;

  const client = new Kinesis({
    region: "us-west-2",
    credentials: aws?.testCredentials,
    requestHandler: new NodeHttp2Handler({
      requestTimeout: 30_000,
      sessionTimeout: 10_000, // set low for testing purposes.
      maxConcurrentStreams: SESSION_CONCURRENCY,
    }),
  });

  const debug = () => {
    return (client.config.requestHandler as any).connectionManager?.debug?.();
  };

  /**
   * The endpoint the client resolves to, used as the connection pool key.
   * Resolved from the client config instead of being hardcoded, so the test
   * follows the client's configured region/endpoint.
   */
  let endpoint: string;

  async function setup() {
    await client.createStream({ StreamName: STREAM_NAME, ShardCount: SHARD_COUNT });
    let status = "";
    while (status !== "ACTIVE") {
      const { StreamDescription } = await client.describeStream({ StreamName: STREAM_NAME });
      status = StreamDescription?.StreamStatus ?? "ERROR";
      if (status !== "ACTIVE") {
        await new Promise((r) => setTimeout(r, 2000));
      }
    }
    await new Promise((r) => setTimeout(r, 2000));
  }

  function runConcurrencyWorkload(n: number): Array<Promise<[string, number, MetadataBearer]>> {
    const after = (name: string, i: number) => (r: MetadataBearer) => {
      return log(name, i, r);
    };

    return Array.from({ length: n }, (_, i) => {
      switch (i % 5) {
        case 0:
          return client
            .describeStream({ StreamName: STREAM_NAME })
            .then(after("describeStream", i))
            .catch(after("describeStream", i));
        case 1:
          return client
            .listShards({ StreamName: STREAM_NAME })
            .then(after("listShards", i))
            .catch(after("listShards", i));
        case 2:
          return client
            .putRecord({ StreamName: STREAM_NAME, Data: Buffer.from(`record-${i}`), PartitionKey: `pk-${i}` })
            .then(after("putRecord", i))
            .catch(after("putRecord", i));
        case 3:
          return client
            .putRecords({
              StreamName: STREAM_NAME,
              Records: Array.from({ length: 5 }, (_, j) => ({
                Data: Buffer.from(`batch-${i}-${j}`),
                PartitionKey: `pk-${i}-${j}`,
              })),
            })
            .then(after("putRecords", i))
            .catch(after("putRecords", i));
        default:
          return client
            .describeStreamSummary({ StreamName: STREAM_NAME })
            .then(after("describeStreamSummary", i))
            .catch(after("describeStreamSummary", i));
      }
    });
  }

  async function cleanup() {
    await client.deleteStream({ StreamName: STREAM_NAME, EnforceConsumerDeletion: true });
  }

  function log(op: string, i: number, res: MetadataBearer): [string, number, MetadataBearer] {
    // console.log(`  [${i}] ${op} ${res.$metadata.httpStatusCode}`);
    return [op, i, res];
  }

  const connectionManagerStates: Record<string, any> = {
    initial: null,
    requestsStarted: null,
    requestsFinished: null,
    secondBatchRequestsStarted: null,
    secondBatchRequestsFinished: null,
    idle: null,
    destroyed: null,
  };

  const requestResults: [string, number, MetadataBearer | (Error & MetadataBearer)][] = [];

  /**
   * A sessions array looks like this:
   * @example
   * ```
   * [
   *   {
   *     "id": 5, // incrementing identifier.
   *     "active": 0, // requests still active.
   *     "maxConcurrent": 5, // max observed concurrency in this session.
   *     "totalRequests": 10 // total requests observed.
   *   }
   * ]
   * ```
   */
  function getSessions(state: any) {
    return state?.[endpoint]?.sessions ?? [];
  }

  beforeAll(async () => {
    // Resolve the endpoint the same way the SDK does at request time.
    const { url } = await getEndpointFromInstructions({}, CreateStreamCommand, client.config);
    endpoint = url.toString();

    connectionManagerStates.initial = debug();
    await setup();

    {
      // The first batch has full concurrency,
      // which creates sessions in the pool based on the allowed session concurrency.
      const work = runConcurrencyWorkload(37);
      connectionManagerStates.requestsStarted = debug();
      requestResults.push(...(await Promise.all(work)));
      connectionManagerStates.requestsFinished = debug();
    }

    let activeSessions = getSessions(debug());

    while (true) {
      await new Promise((r) => setTimeout(r, 6_000));
      const sessions = getSessions(debug());
      expect(sessions.length).toBeLessThanOrEqual(activeSessions.length);
      activeSessions = sessions;
      if (sessions.length === 0) {
        connectionManagerStates.idle = debug();
        break;
      }
    }

    {
      // The second batch contains two workloads without idle timeout,
      // which reuse the connection pool.
      const work = runConcurrencyWorkload(53);
      connectionManagerStates.secondBatchRequestsStarted = debug();
      requestResults.push(...(await Promise.all(work)));
      await Promise.all(runConcurrencyWorkload(17));
      connectionManagerStates.secondBatchRequestsFinished = debug();
    }

    client.destroy();
    connectionManagerStates.destroyed = debug();
  }, 180_000);

  afterAll(async () => {
    await cleanup();
  });

  describe("Node.js HTTP2 session concurrency", () => {
    const sessionType = {
      id: expect.any(Number),
      active: expect.any(Number),
      maxConcurrent: expect.any(Number),
      totalRequests: expect.any(Number),
    };

    beforeAll(async () => {
      /**
       * If debugging this test, get a picture of the connection states
       * at each step by logging this object.
       */
      console.log(JSON.stringify(connectionManagerStates, null, 2));
      expect(connectionManagerStates.initial).toEqual({});

      expect(getSessions(connectionManagerStates.requestsFinished)).not.toEqual([]);
      expect(connectionManagerStates.requestsFinished).toMatchObject({
        [endpoint]: {
          sessions: getSessions(connectionManagerStates.requestsFinished).map(() => sessionType),
        },
      });

      expect(getSessions(connectionManagerStates.secondBatchRequestsFinished)).not.toEqual([]);
      expect(connectionManagerStates.secondBatchRequestsFinished).toMatchObject({
        [endpoint]: {
          sessions: getSessions(connectionManagerStates.secondBatchRequestsFinished).map(() => sessionType),
        },
      });

      expect(connectionManagerStates.idle[endpoint]).toEqual({
        sessions: [],
      });

      expect(connectionManagerStates.destroyed).toEqual({});
    });

    it("each request should have succeeded or have been load-shed", async () => {
      const counts = {
        refused: 0,
        succeeded: 0,
      };

      for (const [operation, id, result] of requestResults) {
        if (result instanceof Error) {
          counts.refused += 1;
          expect(result.message).toContain("NGHTTP2_REFUSED_STREAM");
          console.log(result);
        } else {
          counts.succeeded += 1;
          expect(result.$metadata.httpStatusCode).toBeLessThanOrEqual(300);
        }
      }

      expect(counts.refused).toBeLessThanOrEqual(5);
      expect(counts.succeeded).toBeGreaterThanOrEqual(60);
    });

    it("should start with no sessions in the pools", async () => {
      expect(connectionManagerStates.initial).toEqual({});
    });

    it("should create sessions such that each session handles up to [maxConcurrentStreams] concurrent requests", async () => {
      const sessions = getSessions(connectionManagerStates.requestsFinished);
      const maximumRequestsInBurst = 37;

      // Each session handles at most SESSION_CONCURRENCY concurrent requests.
      for (const session of sessions) {
        expect(session.maxConcurrent).toBeLessThanOrEqual(SESSION_CONCURRENCY);
      }

      // Session count should be between ceil(maximumRequestsInBurst/SESSION_CONCURRENCY) and maximumRequestsInBurst.
      // i.e. the minimum number of sessions to support maximumRequestsInBurst and the maximum number (one session per request).
      expect(sessions.length).toBeGreaterThanOrEqual(Math.ceil(maximumRequestsInBurst / SESSION_CONCURRENCY));
      expect(sessions.length).toBeLessThanOrEqual(maximumRequestsInBurst);
    });

    it("the sessions should draw down as the client idles (client session timeout)", async () => {
      const sessions = getSessions(connectionManagerStates.idle);
      expect(sessions).toEqual([]);
    });

    it("after idling reduces sessions to 0, new requests create new sessions", async () => {
      const earlierBatch = getSessions(connectionManagerStates.requestsFinished);
      const sessions = getSessions(connectionManagerStates.secondBatchRequestsFinished);
      const maximumRequestsInBurst = Math.max(17, 53);

      for (const session of sessions) {
        expect(session.maxConcurrent).toBeLessThanOrEqual(SESSION_CONCURRENCY);
        expect(session.totalRequests).toBeGreaterThanOrEqual(session.maxConcurrent);

        // new sessions were created because of idle timeout between the two workloads.
        expect(session.id).toBeGreaterThan(earlierBatch[0].id);
      }

      expect(sessions.length).toBeGreaterThanOrEqual(Math.ceil(maximumRequestsInBurst / SESSION_CONCURRENCY));
      expect(sessions.length).toBeLessThanOrEqual(maximumRequestsInBurst);
    });

    it("the sessions should be completely cleared when the client is destroyed", async () => {
      const sessions = getSessions(connectionManagerStates.destroyed);
      expect(sessions).toEqual([]);
    });
  });
});
