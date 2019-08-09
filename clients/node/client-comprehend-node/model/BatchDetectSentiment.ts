import { BatchDetectSentimentInput } from "./BatchDetectSentimentInput";
import { BatchDetectSentimentOutput } from "./BatchDetectSentimentOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "./UnsupportedLanguageException";
import { BatchSizeLimitExceededException } from "./BatchSizeLimitExceededException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
