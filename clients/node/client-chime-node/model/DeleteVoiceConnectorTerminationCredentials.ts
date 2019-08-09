import { DeleteVoiceConnectorTerminationCredentialsInput } from "./DeleteVoiceConnectorTerminationCredentialsInput";
import { DeleteVoiceConnectorTerminationCredentialsOutput } from "./DeleteVoiceConnectorTerminationCredentialsOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteVoiceConnectorTerminationCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVoiceConnectorTerminationCredentials",
  http: {
    method: "POST",
    requestUri:
      "/voice-connectors/{voiceConnectorId}/termination/credentials?operation=delete"
  },
  input: {
    shape: DeleteVoiceConnectorTerminationCredentialsInput
  },
  output: {
    shape: DeleteVoiceConnectorTerminationCredentialsOutput
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
