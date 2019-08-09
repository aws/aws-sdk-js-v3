import { ListVoiceConnectorTerminationCredentialsInput } from "./ListVoiceConnectorTerminationCredentialsInput";
import { ListVoiceConnectorTerminationCredentialsOutput } from "./ListVoiceConnectorTerminationCredentialsOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
