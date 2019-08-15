import { UpdateBrokerStorageInput } from "../shapes/UpdateBrokerStorageInput";
import { UpdateBrokerStorageOutput } from "../shapes/UpdateBrokerStorageOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBrokerStorage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBrokerStorage",
  http: {
    method: "PUT",
    requestUri: "/v1/clusters/{clusterArn}/nodes/storage"
  },
  input: {
    shape: UpdateBrokerStorageInput
  },
  output: {
    shape: UpdateBrokerStorageOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
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
    }
  ]
};
