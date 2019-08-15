import { GetVoiceConnectorOriginationInput } from "../shapes/GetVoiceConnectorOriginationInput";
import { GetVoiceConnectorOriginationOutput } from "../shapes/GetVoiceConnectorOriginationOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
