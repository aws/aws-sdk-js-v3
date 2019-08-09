import { CreateBrokerInput } from "./CreateBrokerInput";
import { CreateBrokerOutput } from "./CreateBrokerOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
