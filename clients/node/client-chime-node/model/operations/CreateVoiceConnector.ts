import { CreateVoiceConnectorInput } from "../shapes/CreateVoiceConnectorInput";
import { CreateVoiceConnectorOutput } from "../shapes/CreateVoiceConnectorOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVoiceConnector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVoiceConnector",
  http: {
    method: "POST",
    requestUri: "/voice-connectors"
  },
  input: {
    shape: CreateVoiceConnectorInput
  },
  output: {
    shape: CreateVoiceConnectorOutput
  },
  errors: [
    {
      shape: UnauthorizedClientException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ThrottledClientException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
