import { DeleteBrokerInput } from "./DeleteBrokerInput";
import { DeleteBrokerOutput } from "./DeleteBrokerOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
