import { DetectEntitiesInput } from "../shapes/DetectEntitiesInput";
import { DetectEntitiesOutput } from "../shapes/DetectEntitiesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "../shapes/UnsupportedLanguageException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
