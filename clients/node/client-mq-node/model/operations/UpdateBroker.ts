import { UpdateBrokerInput } from "../shapes/UpdateBrokerInput";
import { UpdateBrokerOutput } from "../shapes/UpdateBrokerOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ConflictException } from "../shapes/ConflictException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBroker: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBroker",
  http: {
    method: "PUT",
    requestUri: "/v1/brokers/{broker-id}"
  },
  input: {
    shape: UpdateBrokerInput
  },
  output: {
    shape: UpdateBrokerOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
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
