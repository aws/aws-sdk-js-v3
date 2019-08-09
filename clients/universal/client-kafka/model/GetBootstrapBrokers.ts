import { GetBootstrapBrokersInput } from "./GetBootstrapBrokersInput";
import { GetBootstrapBrokersOutput } from "./GetBootstrapBrokersOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBootstrapBrokers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBootstrapBrokers",
  http: {
    method: "GET",
    requestUri: "/v1/clusters/{clusterArn}/bootstrap-brokers"
  },
  input: {
    shape: GetBootstrapBrokersInput
  },
  output: {
    shape: GetBootstrapBrokersOutput
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
      shape: ConflictException
    },
    {
      shape: ForbiddenException
    }
  ]
};
