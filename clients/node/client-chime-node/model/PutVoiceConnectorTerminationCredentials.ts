import { PutVoiceConnectorTerminationCredentialsInput } from "./PutVoiceConnectorTerminationCredentialsInput";
import { PutVoiceConnectorTerminationCredentialsOutput } from "./PutVoiceConnectorTerminationCredentialsOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutVoiceConnectorTerminationCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutVoiceConnectorTerminationCredentials",
  http: {
    method: "POST",
    requestUri:
      "/voice-connectors/{voiceConnectorId}/termination/credentials?operation=put"
  },
  input: {
    shape: PutVoiceConnectorTerminationCredentialsInput
  },
  output: {
    shape: PutVoiceConnectorTerminationCredentialsOutput
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
