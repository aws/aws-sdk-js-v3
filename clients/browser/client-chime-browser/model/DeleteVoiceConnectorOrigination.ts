import { DeleteVoiceConnectorOriginationInput } from "./DeleteVoiceConnectorOriginationInput";
import { DeleteVoiceConnectorOriginationOutput } from "./DeleteVoiceConnectorOriginationOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteVoiceConnectorOrigination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVoiceConnectorOrigination",
  http: {
    method: "DELETE",
    requestUri: "/voice-connectors/{voiceConnectorId}/origination"
  },
  input: {
    shape: DeleteVoiceConnectorOriginationInput
  },
  output: {
    shape: DeleteVoiceConnectorOriginationOutput
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
