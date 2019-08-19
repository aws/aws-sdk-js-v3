import { UpdateCompanyNetworkConfigurationInput } from "../shapes/UpdateCompanyNetworkConfigurationInput";
import { UpdateCompanyNetworkConfigurationOutput } from "../shapes/UpdateCompanyNetworkConfigurationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateCompanyNetworkConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCompanyNetworkConfiguration",
  http: {
    method: "POST",
    requestUri: "/updateCompanyNetworkConfiguration"
  },
  input: {
    shape: UpdateCompanyNetworkConfigurationInput
  },
  output: {
    shape: UpdateCompanyNetworkConfigurationOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
