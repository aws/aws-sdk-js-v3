import { UpdateUserPhoneConfigInput } from "./UpdateUserPhoneConfigInput";
import { UpdateUserPhoneConfigOutput } from "./UpdateUserPhoneConfigOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
