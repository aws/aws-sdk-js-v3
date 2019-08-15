import { DeleteBrokerInput } from "../shapes/DeleteBrokerInput";
import { DeleteBrokerOutput } from "../shapes/DeleteBrokerOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBroker: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBroker",
  http: {
    method: "DELETE",
    requestUri: "/v1/brokers/{broker-id}"
  },
  input: {
    shape: DeleteBrokerInput
  },
  output: {
    shape: DeleteBrokerOutput
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
      shape: ForbiddenException
    }
  ]
};
