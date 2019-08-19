import { DetectSentimentInput } from "../shapes/DetectSentimentInput";
import { DetectSentimentOutput } from "../shapes/DetectSentimentOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "../shapes/UnsupportedLanguageException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
