import { UpdateBrokerStorageInput } from "./UpdateBrokerStorageInput";
import { UpdateBrokerStorageOutput } from "./UpdateBrokerStorageOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
