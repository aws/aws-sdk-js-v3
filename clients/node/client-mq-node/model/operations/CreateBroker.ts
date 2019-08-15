import { CreateBrokerInput } from "../shapes/CreateBrokerInput";
import { CreateBrokerOutput } from "../shapes/CreateBrokerOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ConflictException } from "../shapes/ConflictException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBroker: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBroker",
  http: {
    method: "POST",
    requestUri: "/v1/brokers"
  },
  input: {
    shape: CreateBrokerInput
  },
  output: {
    shape: CreateBrokerOutput
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
