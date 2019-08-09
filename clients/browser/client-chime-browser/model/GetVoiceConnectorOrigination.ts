import { GetVoiceConnectorOriginationInput } from "./GetVoiceConnectorOriginationInput";
import { GetVoiceConnectorOriginationOutput } from "./GetVoiceConnectorOriginationOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetVoiceConnectorOrigination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetVoiceConnectorOrigination",
  http: {
    method: "GET",
    requestUri: "/voice-connectors/{voiceConnectorId}/origination"
  },
  input: {
    shape: GetVoiceConnectorOriginationInput
  },
  output: {
    shape: GetVoiceConnectorOriginationOutput
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
