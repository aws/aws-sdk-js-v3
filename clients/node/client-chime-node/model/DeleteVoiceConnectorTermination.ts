import { DeleteVoiceConnectorTerminationInput } from "./DeleteVoiceConnectorTerminationInput";
import { DeleteVoiceConnectorTerminationOutput } from "./DeleteVoiceConnectorTerminationOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteVoiceConnectorTermination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVoiceConnectorTermination",
  http: {
    method: "DELETE",
    requestUri: "/voice-connectors/{voiceConnectorId}/termination"
  },
  input: {
    shape: DeleteVoiceConnectorTerminationInput
  },
  output: {
    shape: DeleteVoiceConnectorTerminationOutput
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
