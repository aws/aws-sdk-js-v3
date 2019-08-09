import { DetectSentimentInput } from "./DetectSentimentInput";
import { DetectSentimentOutput } from "./DetectSentimentOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "./UnsupportedLanguageException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetectSentiment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetectSentiment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetectSentimentInput
  },
  output: {
    shape: DetectSentimentOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TextSizeLimitExceededException
    },
    {
      shape: UnsupportedLanguageException
    },
    {
      shape: InternalServerException
    }
  ]
};
