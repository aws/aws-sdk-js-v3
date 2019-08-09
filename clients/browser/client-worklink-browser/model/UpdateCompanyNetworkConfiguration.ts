import { UpdateCompanyNetworkConfigurationInput } from "./UpdateCompanyNetworkConfigurationInput";
import { UpdateCompanyNetworkConfigurationOutput } from "./UpdateCompanyNetworkConfigurationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
