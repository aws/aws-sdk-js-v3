// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  ApplyGuardrail$,
  ApplyGuardrailCommand,
  BedrockRuntimeClient,
  Converse$,
  ConverseCommand,
  ConverseStream$,
  ConverseStreamCommand,
  CountTokens$,
  CountTokensCommand,
  GetAsyncInvoke$,
  GetAsyncInvokeCommand,
  InvokeModel$,
  InvokeModelCommand,
  InvokeModelWithBidirectionalStream$,
  InvokeModelWithBidirectionalStreamCommand,
  InvokeModelWithResponseStream$,
  InvokeModelWithResponseStreamCommand,
  ListAsyncInvokes$,
  ListAsyncInvokesCommand,
  StartAsyncInvoke$,
  StartAsyncInvokeCommand,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = BedrockRuntimeClient;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe("BedrockRuntimeClient" + ` (${mode})`, () => {
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
    schemas:
      new Map<any, any>([
        [ApplyGuardrail$, ApplyGuardrailCommand],
        [Converse$, ConverseCommand],
        [ConverseStream$, ConverseStreamCommand],
        [CountTokens$, CountTokensCommand],
        [GetAsyncInvoke$, GetAsyncInvokeCommand],
        [InvokeModel$, InvokeModelCommand],
        [InvokeModelWithBidirectionalStream$, InvokeModelWithBidirectionalStreamCommand],
        [InvokeModelWithResponseStream$, InvokeModelWithResponseStreamCommand],
        [ListAsyncInvokes$, ListAsyncInvokesCommand],
        [StartAsyncInvoke$, StartAsyncInvokeCommand],
      ]),

  });

  runner.run();
}, 30_000);
