import { StartSpeechSynthesisTaskInput } from "../shapes/StartSpeechSynthesisTaskInput";
import { StartSpeechSynthesisTaskOutput } from "../shapes/StartSpeechSynthesisTaskOutput";
import { TextLengthExceededException } from "../shapes/TextLengthExceededException";
import { InvalidS3BucketException } from "../shapes/InvalidS3BucketException";
import { InvalidS3KeyException } from "../shapes/InvalidS3KeyException";
import { InvalidSampleRateException } from "../shapes/InvalidSampleRateException";
import { InvalidSnsTopicArnException } from "../shapes/InvalidSnsTopicArnException";
import { InvalidSsmlException } from "../shapes/InvalidSsmlException";
import { EngineNotSupportedException } from "../shapes/EngineNotSupportedException";
import { LexiconNotFoundException } from "../shapes/LexiconNotFoundException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { MarksNotSupportedForFormatException } from "../shapes/MarksNotSupportedForFormatException";
import { SsmlMarksNotSupportedForTextTypeException } from "../shapes/SsmlMarksNotSupportedForTextTypeException";
import { LanguageNotSupportedException } from "../shapes/LanguageNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
