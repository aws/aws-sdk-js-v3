import { UpdateUserPhoneConfigInput } from "../shapes/UpdateUserPhoneConfigInput";
import { UpdateUserPhoneConfigOutput } from "../shapes/UpdateUserPhoneConfigOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUserPhoneConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUserPhoneConfig",
  http: {
    method: "POST",
    requestUri: "/users/{InstanceId}/{UserId}/phone-config"
  },
  input: {
    shape: UpdateUserPhoneConfigInput
  },
  output: {
    shape: UpdateUserPhoneConfigOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceException
    }
  ]
};
