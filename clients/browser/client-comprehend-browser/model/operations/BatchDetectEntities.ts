import { BatchDetectEntitiesInput } from "../shapes/BatchDetectEntitiesInput";
import { BatchDetectEntitiesOutput } from "../shapes/BatchDetectEntitiesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "../shapes/UnsupportedLanguageException";
import { BatchSizeLimitExceededException } from "../shapes/BatchSizeLimitExceededException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDetectEntities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDetectEntities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDetectEntitiesInput
  },
  output: {
    shape: BatchDetectEntitiesOutput
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
