import { BatchDetectDominantLanguageInput } from "../shapes/BatchDetectDominantLanguageInput";
import { BatchDetectDominantLanguageOutput } from "../shapes/BatchDetectDominantLanguageOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
import { BatchSizeLimitExceededException } from "../shapes/BatchSizeLimitExceededException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
