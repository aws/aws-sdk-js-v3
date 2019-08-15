import { DeleteVoiceConnectorTerminationInput } from "../shapes/DeleteVoiceConnectorTerminationInput";
import { DeleteVoiceConnectorTerminationOutput } from "../shapes/DeleteVoiceConnectorTerminationOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
