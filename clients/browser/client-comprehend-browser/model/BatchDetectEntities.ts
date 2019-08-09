import { BatchDetectEntitiesInput } from "./BatchDetectEntitiesInput";
import { BatchDetectEntitiesOutput } from "./BatchDetectEntitiesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "./UnsupportedLanguageException";
import { BatchSizeLimitExceededException } from "./BatchSizeLimitExceededException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
