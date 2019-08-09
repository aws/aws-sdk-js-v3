import { DeleteVoiceConnectorInput } from "./DeleteVoiceConnectorInput";
import { DeleteVoiceConnectorOutput } from "./DeleteVoiceConnectorOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteVoiceConnector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVoiceConnector",
  http: {
    method: "DELETE",
    requestUri: "/voice-connectors/{voiceConnectorId}"
  },
  input: {
    shape: DeleteVoiceConnectorInput
  },
  output: {
    shape: DeleteVoiceConnectorOutput
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
