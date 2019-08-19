import { DetectEntitiesInput } from "../shapes/DetectEntitiesInput";
import { DetectEntitiesOutput } from "../shapes/DetectEntitiesOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidEncodingException } from "../shapes/InvalidEncodingException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
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
      shape: InternalServerException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidEncodingException
    },
    {
      shape: TextSizeLimitExceededException
    }
  ]
};
