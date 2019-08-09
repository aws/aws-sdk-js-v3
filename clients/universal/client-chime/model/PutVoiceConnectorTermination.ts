import { PutVoiceConnectorTerminationInput } from "./PutVoiceConnectorTerminationInput";
import { PutVoiceConnectorTerminationOutput } from "./PutVoiceConnectorTerminationOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
