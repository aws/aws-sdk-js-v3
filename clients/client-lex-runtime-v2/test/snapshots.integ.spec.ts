// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  AccessDeniedException$,
  BadGatewayException$,
  ConflictException$,
  DeleteSession$,
  DeleteSessionCommand,
  DependencyFailedException$,
  GetSession$,
  GetSessionCommand,
  InternalServerException$,
  LexRuntimeV2Client,
  PutSession$,
  PutSessionCommand,
  RecognizeText$,
  RecognizeTextCommand,
  RecognizeUtterance$,
  RecognizeUtteranceCommand,
  ResourceNotFoundException$,
  StartConversation$,
  StartConversationCommand,
  ThrottlingException$,
  ValidationException$,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = LexRuntimeV2Client;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe("LexRuntimeV2Client" + ` (${mode})`, () => {
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
      [DeleteSession$, DeleteSessionCommand],
      [GetSession$, GetSessionCommand],
      [PutSession$, PutSessionCommand],
      [RecognizeText$, RecognizeTextCommand],
      [RecognizeUtterance$, RecognizeUtteranceCommand],
      [StartConversation$, StartConversationCommand],
    ]),
    errors: [
      AccessDeniedException$,
      BadGatewayException$,
      ConflictException$,
      DependencyFailedException$,
      InternalServerException$,
      ResourceNotFoundException$,
      ThrottlingException$,
      ValidationException$,
    ],
  });
  runner.run();
}, 30_000);
