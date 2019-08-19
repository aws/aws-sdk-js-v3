import { UpdateClusterConfigurationInput } from "../shapes/UpdateClusterConfigurationInput";
import { UpdateClusterConfigurationOutput } from "../shapes/UpdateClusterConfigurationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateClusterConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateClusterConfiguration",
  http: {
    method: "PUT",
    requestUri: "/v1/clusters/{clusterArn}/configuration"
  },
  input: {
    shape: UpdateClusterConfigurationInput
  },
  output: {
    shape: UpdateClusterConfigurationOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
