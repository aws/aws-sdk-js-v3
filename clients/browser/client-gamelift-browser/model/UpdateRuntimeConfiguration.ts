import { UpdateRuntimeConfigurationInput } from "./UpdateRuntimeConfigurationInput";
import { UpdateRuntimeConfigurationOutput } from "./UpdateRuntimeConfigurationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidFleetStatusException } from "./InvalidFleetStatusException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateRuntimeConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRuntimeConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateRuntimeConfigurationInput
  },
  output: {
    shape: UpdateRuntimeConfigurationOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidFleetStatusException
    }
  ]
};
