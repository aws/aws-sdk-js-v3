import { DeleteVoiceConnectorTerminationCredentialsInput } from "../shapes/DeleteVoiceConnectorTerminationCredentialsInput";
import { DeleteVoiceConnectorTerminationCredentialsOutput } from "../shapes/DeleteVoiceConnectorTerminationCredentialsOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
