// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  DeleteLexicon$,
  DeleteLexiconCommand,
  DescribeVoices$,
  DescribeVoicesCommand,
  EngineNotSupportedException$,
  GetLexicon$,
  GetLexiconCommand,
  GetSpeechSynthesisTask$,
  GetSpeechSynthesisTaskCommand,
  InvalidLexiconException$,
  InvalidNextTokenException$,
  InvalidS3BucketException$,
  InvalidS3KeyException$,
  InvalidSampleRateException$,
  InvalidSnsTopicArnException$,
  InvalidSsmlException$,
  InvalidTaskIdException$,
  LanguageNotSupportedException$,
  LexiconNotFoundException$,
  LexiconSizeExceededException$,
  ListLexicons$,
  ListLexiconsCommand,
  ListSpeechSynthesisTasks$,
  ListSpeechSynthesisTasksCommand,
  MarksNotSupportedForFormatException$,
  MaxLexemeLengthExceededException$,
  MaxLexiconsNumberExceededException$,
  PollyClient,
  PutLexicon$,
  PutLexiconCommand,
  ServiceFailureException$,
  ServiceQuotaExceededException$,
  SsmlMarksNotSupportedForTextTypeException$,
  StartSpeechSynthesisStream$,
  StartSpeechSynthesisStreamCommand,
  StartSpeechSynthesisTask$,
  StartSpeechSynthesisTaskCommand,
  SynthesisTaskNotFoundException$,
  SynthesizeSpeech$,
  SynthesizeSpeechCommand,
  TextLengthExceededException$,
  ThrottlingException$,
  UnsupportedPlsAlphabetException$,
  UnsupportedPlsLanguageException$,
  ValidationException$,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = PollyClient;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe("PollyClient" + ` (${mode})`, () => {
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
      [DeleteLexicon$, DeleteLexiconCommand],
      [DescribeVoices$, DescribeVoicesCommand],
      [GetLexicon$, GetLexiconCommand],
      [GetSpeechSynthesisTask$, GetSpeechSynthesisTaskCommand],
      [ListLexicons$, ListLexiconsCommand],
      [ListSpeechSynthesisTasks$, ListSpeechSynthesisTasksCommand],
      [PutLexicon$, PutLexiconCommand],
      [StartSpeechSynthesisStream$, StartSpeechSynthesisStreamCommand],
      [StartSpeechSynthesisTask$, StartSpeechSynthesisTaskCommand],
      [SynthesizeSpeech$, SynthesizeSpeechCommand],
    ]),
    errors: [
      EngineNotSupportedException$,
      InvalidLexiconException$,
      InvalidNextTokenException$,
      InvalidS3BucketException$,
      InvalidS3KeyException$,
      InvalidSampleRateException$,
      InvalidSnsTopicArnException$,
      InvalidSsmlException$,
      InvalidTaskIdException$,
      LanguageNotSupportedException$,
      LexiconNotFoundException$,
      LexiconSizeExceededException$,
      MarksNotSupportedForFormatException$,
      MaxLexemeLengthExceededException$,
      MaxLexiconsNumberExceededException$,
      ServiceFailureException$,
      ServiceQuotaExceededException$,
      SsmlMarksNotSupportedForTextTypeException$,
      SynthesisTaskNotFoundException$,
      TextLengthExceededException$,
      ThrottlingException$,
      UnsupportedPlsAlphabetException$,
      UnsupportedPlsLanguageException$,
      ValidationException$,
    ],
  });
  runner.run();
}, 30_000);
