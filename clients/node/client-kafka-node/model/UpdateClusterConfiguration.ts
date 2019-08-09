import { UpdateClusterConfigurationInput } from "./UpdateClusterConfigurationInput";
import { UpdateClusterConfigurationOutput } from "./UpdateClusterConfigurationOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
