import { BatchDetectDominantLanguageInput } from "./BatchDetectDominantLanguageInput";
import { BatchDetectDominantLanguageOutput } from "./BatchDetectDominantLanguageOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { BatchSizeLimitExceededException } from "./BatchSizeLimitExceededException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchDetectDominantLanguage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDetectDominantLanguage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDetectDominantLanguageInput
  },
  output: {
    shape: BatchDetectDominantLanguageOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TextSizeLimitExceededException
    },
    {
      shape: BatchSizeLimitExceededException
    },
    {
      shape: InternalServerException
    }
  ]
};
