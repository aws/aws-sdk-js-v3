import { PutVoiceConnectorTerminationInput } from "../shapes/PutVoiceConnectorTerminationInput";
import { PutVoiceConnectorTerminationOutput } from "../shapes/PutVoiceConnectorTerminationOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutVoiceConnectorTermination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutVoiceConnectorTermination",
  http: {
    method: "PUT",
    requestUri: "/voice-connectors/{voiceConnectorId}/termination"
  },
  input: {
    shape: PutVoiceConnectorTerminationInput
  },
  output: {
    shape: PutVoiceConnectorTerminationOutput
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
