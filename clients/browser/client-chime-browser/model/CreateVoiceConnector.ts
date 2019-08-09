import { CreateVoiceConnectorInput } from "./CreateVoiceConnectorInput";
import { CreateVoiceConnectorOutput } from "./CreateVoiceConnectorOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateVoiceConnector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVoiceConnector",
  http: {
    method: "POST",
    requestUri: "/voice-connectors"
  },
  input: {
    shape: CreateVoiceConnectorInput
  },
  output: {
    shape: CreateVoiceConnectorOutput
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
