import { BatchDetectSentimentInput } from "../shapes/BatchDetectSentimentInput";
import { BatchDetectSentimentOutput } from "../shapes/BatchDetectSentimentOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "../shapes/UnsupportedLanguageException";
import { BatchSizeLimitExceededException } from "../shapes/BatchSizeLimitExceededException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDetectSentiment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDetectSentiment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDetectSentimentInput
  },
  output: {
    shape: BatchDetectSentimentOutput
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
      shape: BatchSizeLimitExceededException
    },
    {
      shape: InternalServerException
    }
  ]
};
