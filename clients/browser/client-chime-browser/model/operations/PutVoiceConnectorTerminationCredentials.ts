import { PutVoiceConnectorTerminationCredentialsInput } from "../shapes/PutVoiceConnectorTerminationCredentialsInput";
import { PutVoiceConnectorTerminationCredentialsOutput } from "../shapes/PutVoiceConnectorTerminationCredentialsOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
