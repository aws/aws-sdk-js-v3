import { ListVoiceConnectorTerminationCredentialsInput } from "../shapes/ListVoiceConnectorTerminationCredentialsInput";
import { ListVoiceConnectorTerminationCredentialsOutput } from "../shapes/ListVoiceConnectorTerminationCredentialsOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListVoiceConnectorTerminationCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVoiceConnectorTerminationCredentials",
  http: {
    method: "GET",
    requestUri: "/voice-connectors/{voiceConnectorId}/termination/credentials"
  },
  input: {
    shape: ListVoiceConnectorTerminationCredentialsInput
  },
  output: {
    shape: ListVoiceConnectorTerminationCredentialsOutput
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
