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
  InvalidTagParameterException$,
  InvalidTaskIdException$,
  LanguageNotSupportedException$,
  LexiconNotFoundException$,
  LexiconSizeExceededException$,
  ListLexicons$,
  ListLexiconsCommand,
  ListSpeechSynthesisTasks$,
  ListSpeechSynthesisTasksCommand,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  MarksNotSupportedForFormatException$,
  MaxLexemeLengthExceededException$,
  MaxLexiconsNumberExceededException$,
  PollyClient,
  PutLexicon$,
  PutLexiconCommand,
  ResourceNotFoundException$,
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
  TagResource$,
  TagResourceCommand,
  TextLengthExceededException$,
  ThrottlingException$,
  TooManyTagsException$,
  UnsupportedPlsAlphabetException$,
  UnsupportedPlsLanguageException$,
  UntagResource$,
  UntagResourceCommand,
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
      [ListTagsForResource$, ListTagsForResourceCommand],
      [PutLexicon$, PutLexiconCommand],
      [StartSpeechSynthesisStream$, StartSpeechSynthesisStreamCommand],
      [StartSpeechSynthesisTask$, StartSpeechSynthesisTaskCommand],
      [SynthesizeSpeech$, SynthesizeSpeechCommand],
      [TagResource$, TagResourceCommand],
      [UntagResource$, UntagResourceCommand],
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
      InvalidTagParameterException$,
      InvalidTaskIdException$,
      LanguageNotSupportedException$,
      LexiconNotFoundException$,
      LexiconSizeExceededException$,
      MarksNotSupportedForFormatException$,
      MaxLexemeLengthExceededException$,
      MaxLexiconsNumberExceededException$,
      ResourceNotFoundException$,
      ServiceFailureException$,
      ServiceQuotaExceededException$,
      SsmlMarksNotSupportedForTextTypeException$,
      SynthesisTaskNotFoundException$,
      TextLengthExceededException$,
      ThrottlingException$,
      TooManyTagsException$,
      UnsupportedPlsAlphabetException$,
      UnsupportedPlsLanguageException$,
      ValidationException$,
    ],
  });
  runner.run();
}, 30_000);
