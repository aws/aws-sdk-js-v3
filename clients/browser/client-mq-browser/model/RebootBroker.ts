import { RebootBrokerInput } from "./RebootBrokerInput";
import { RebootBrokerOutput } from "./RebootBrokerOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
