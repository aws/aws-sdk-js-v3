import { GetBootstrapBrokersInput } from "../shapes/GetBootstrapBrokersInput";
import { GetBootstrapBrokersOutput } from "../shapes/GetBootstrapBrokersOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ConflictException } from "../shapes/ConflictException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
