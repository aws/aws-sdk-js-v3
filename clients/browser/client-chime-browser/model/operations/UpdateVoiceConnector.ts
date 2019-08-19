import { UpdateVoiceConnectorInput } from "../shapes/UpdateVoiceConnectorInput";
import { UpdateVoiceConnectorOutput } from "../shapes/UpdateVoiceConnectorOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateVoiceConnector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateVoiceConnector",
  http: {
    method: "PUT",
    requestUri: "/voice-connectors/{voiceConnectorId}"
  },
  input: {
    shape: UpdateVoiceConnectorInput
  },
  output: {
    shape: UpdateVoiceConnectorOutput
  },
  errors: [
    {
      shape: UnauthorizedClientException
    },
    {
      shape: NotFoundException
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
