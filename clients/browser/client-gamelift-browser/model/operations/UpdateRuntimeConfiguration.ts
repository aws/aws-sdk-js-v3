import { UpdateRuntimeConfigurationInput } from "../shapes/UpdateRuntimeConfigurationInput";
import { UpdateRuntimeConfigurationOutput } from "../shapes/UpdateRuntimeConfigurationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidFleetStatusException } from "../shapes/InvalidFleetStatusException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
