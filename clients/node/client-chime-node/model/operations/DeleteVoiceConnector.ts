import { DeleteVoiceConnectorInput } from "../shapes/DeleteVoiceConnectorInput";
import { DeleteVoiceConnectorOutput } from "../shapes/DeleteVoiceConnectorOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
