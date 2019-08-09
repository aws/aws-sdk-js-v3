import { GetVoiceConnectorTerminationInput } from "./GetVoiceConnectorTerminationInput";
import { GetVoiceConnectorTerminationOutput } from "./GetVoiceConnectorTerminationOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetVoiceConnectorTermination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetVoiceConnectorTermination",
  http: {
    method: "GET",
    requestUri: "/voice-connectors/{voiceConnectorId}/termination"
  },
  input: {
    shape: GetVoiceConnectorTerminationInput
  },
  output: {
    shape: GetVoiceConnectorTerminationOutput
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
