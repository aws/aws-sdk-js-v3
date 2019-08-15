import { GetCelebrityInfoInput } from "../shapes/GetCelebrityInfoInput";
import { GetCelebrityInfoOutput } from "../shapes/GetCelebrityInfoOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCelebrityInfo: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCelebrityInfo",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCelebrityInfoInput
  },
  output: {
    shape: GetCelebrityInfoOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
