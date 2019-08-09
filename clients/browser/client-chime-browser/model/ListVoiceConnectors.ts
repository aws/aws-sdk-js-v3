import { ListVoiceConnectorsInput } from "./ListVoiceConnectorsInput";
import { ListVoiceConnectorsOutput } from "./ListVoiceConnectorsOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListVoiceConnectors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVoiceConnectors",
  http: {
    method: "GET",
    requestUri: "/voice-connectors"
  },
  input: {
    shape: ListVoiceConnectorsInput
  },
  output: {
    shape: ListVoiceConnectorsOutput
  },
  errors: [
    {
      shape: UnauthorizedClientException
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
