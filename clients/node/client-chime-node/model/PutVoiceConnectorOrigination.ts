import { PutVoiceConnectorOriginationInput } from "./PutVoiceConnectorOriginationInput";
import { PutVoiceConnectorOriginationOutput } from "./PutVoiceConnectorOriginationOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutVoiceConnectorOrigination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutVoiceConnectorOrigination",
  http: {
    method: "PUT",
    requestUri: "/voice-connectors/{voiceConnectorId}/origination"
  },
  input: {
    shape: PutVoiceConnectorOriginationInput
  },
  output: {
    shape: PutVoiceConnectorOriginationOutput
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
