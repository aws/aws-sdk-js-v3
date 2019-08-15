import { GetVoiceConnectorTerminationInput } from "../shapes/GetVoiceConnectorTerminationInput";
import { GetVoiceConnectorTerminationOutput } from "../shapes/GetVoiceConnectorTerminationOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
