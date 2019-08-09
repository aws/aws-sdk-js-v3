import { DetectEntitiesInput } from "./DetectEntitiesInput";
import { DetectEntitiesOutput } from "./DetectEntitiesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "./UnsupportedLanguageException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetectEntities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetectEntities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetectEntitiesInput
  },
  output: {
    shape: DetectEntitiesOutput
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
