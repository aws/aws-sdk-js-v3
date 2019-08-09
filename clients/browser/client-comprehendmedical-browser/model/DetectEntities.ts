import { DetectEntitiesInput } from "./DetectEntitiesInput";
import { DetectEntitiesOutput } from "./DetectEntitiesOutput";
import { InternalServerException } from "./InternalServerException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidEncodingException } from "./InvalidEncodingException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
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
