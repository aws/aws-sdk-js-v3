import { UpdateBrokerInput } from "./UpdateBrokerInput";
import { UpdateBrokerOutput } from "./UpdateBrokerOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
