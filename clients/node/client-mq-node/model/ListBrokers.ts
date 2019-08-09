import { ListBrokersInput } from "./ListBrokersInput";
import { ListBrokersOutput } from "./ListBrokersOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
