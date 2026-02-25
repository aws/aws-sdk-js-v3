// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  DescribeStream$,
  DescribeStreamCommand,
  DynamoDBStreamsClient,
  GetRecords$,
  GetRecordsCommand,
  GetShardIterator$,
  GetShardIteratorCommand,
  ListStreams$,
  ListStreamsCommand,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = DynamoDBStreamsClient;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe(
  "DynamoDBStreamsClient" + ` (${mode})`,
  () => {
    const runner = new SnapshotRunner({
      snapshotDirPath: join(__dirname, "snapshots"),
      Client,
      mode,
      testCase(caseName: string, run: () => Promise<void>) {
        it(caseName, run);
      },
      assertions(caseName: string, expected: string, actual: string): Promise<void> {
        expect(actual).toEqual(expected);
        return Promise.resolve();
      },
      schemas: new Map<any, any>([
        [DescribeStream$, DescribeStreamCommand],
        [GetRecords$, GetRecordsCommand],
        [GetShardIterator$, GetShardIteratorCommand],
        [ListStreams$, ListStreamsCommand],
      ]),
    });

    runner.run();
  },
  30_000
);
