import { GetVoiceConnectorInput } from "../shapes/GetVoiceConnectorInput";
import { GetVoiceConnectorOutput } from "../shapes/GetVoiceConnectorOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
