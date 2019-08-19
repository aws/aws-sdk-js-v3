import { ListBrokersInput } from "../shapes/ListBrokersInput";
import { ListBrokersOutput } from "../shapes/ListBrokersOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBrokers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBrokers",
  http: {
    method: "GET",
    requestUri: "/v1/brokers"
  },
  input: {
    shape: ListBrokersInput
  },
  output: {
    shape: ListBrokersOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    }
  ]
};
