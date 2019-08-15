import { RebootBrokerInput } from "../shapes/RebootBrokerInput";
import { RebootBrokerOutput } from "../shapes/RebootBrokerOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RebootBroker: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RebootBroker",
  http: {
    method: "POST",
    requestUri: "/v1/brokers/{broker-id}/reboot"
  },
  input: {
    shape: RebootBrokerInput
  },
  output: {
    shape: RebootBrokerOutput
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
