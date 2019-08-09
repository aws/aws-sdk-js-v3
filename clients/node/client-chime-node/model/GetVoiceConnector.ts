import { GetVoiceConnectorInput } from "./GetVoiceConnectorInput";
import { GetVoiceConnectorOutput } from "./GetVoiceConnectorOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetVoiceConnector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetVoiceConnector",
  http: {
    method: "GET",
    requestUri: "/voice-connectors/{voiceConnectorId}"
  },
  input: {
    shape: GetVoiceConnectorInput
  },
  output: {
    shape: GetVoiceConnectorOutput
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
