import { GetVoiceConnectorTerminationHealthInput } from "./GetVoiceConnectorTerminationHealthInput";
import { GetVoiceConnectorTerminationHealthOutput } from "./GetVoiceConnectorTerminationHealthOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetVoiceConnectorTerminationHealth: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetVoiceConnectorTerminationHealth",
  http: {
    method: "GET",
    requestUri: "/voice-connectors/{voiceConnectorId}/termination/health"
  },
  input: {
    shape: GetVoiceConnectorTerminationHealthInput
  },
  output: {
    shape: GetVoiceConnectorTerminationHealthOutput
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
