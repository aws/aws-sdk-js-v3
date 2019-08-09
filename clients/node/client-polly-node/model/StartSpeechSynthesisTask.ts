import { StartSpeechSynthesisTaskInput } from "./StartSpeechSynthesisTaskInput";
import { StartSpeechSynthesisTaskOutput } from "./StartSpeechSynthesisTaskOutput";
import { TextLengthExceededException } from "./TextLengthExceededException";
import { InvalidS3BucketException } from "./InvalidS3BucketException";
import { InvalidS3KeyException } from "./InvalidS3KeyException";
import { InvalidSampleRateException } from "./InvalidSampleRateException";
import { InvalidSnsTopicArnException } from "./InvalidSnsTopicArnException";
import { InvalidSsmlException } from "./InvalidSsmlException";
import { EngineNotSupportedException } from "./EngineNotSupportedException";
import { LexiconNotFoundException } from "./LexiconNotFoundException";
import { ServiceFailureException } from "./ServiceFailureException";
import { MarksNotSupportedForFormatException } from "./MarksNotSupportedForFormatException";
import { SsmlMarksNotSupportedForTextTypeException } from "./SsmlMarksNotSupportedForTextTypeException";
import { LanguageNotSupportedException } from "./LanguageNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartSpeechSynthesisTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartSpeechSynthesisTask",
  http: {
    method: "POST",
    requestUri: "/v1/synthesisTasks"
  },
  input: {
    shape: StartSpeechSynthesisTaskInput
  },
  output: {
    shape: StartSpeechSynthesisTaskOutput
  },
  errors: [
    {
      shape: TextLengthExceededException
    },
    {
      shape: InvalidS3BucketException
    },
    {
      shape: InvalidS3KeyException
    },
    {
      shape: InvalidSampleRateException
    },
    {
      shape: InvalidSnsTopicArnException
    },
    {
      shape: InvalidSsmlException
    },
    {
      shape: EngineNotSupportedException
    },
    {
      shape: LexiconNotFoundException
    },
    {
      shape: ServiceFailureException
    },
    {
      shape: MarksNotSupportedForFormatException
    },
    {
      shape: SsmlMarksNotSupportedForTextTypeException
    },
    {
      shape: LanguageNotSupportedException
    }
  ]
};
