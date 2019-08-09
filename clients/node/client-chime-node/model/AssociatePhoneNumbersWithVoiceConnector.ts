import { AssociatePhoneNumbersWithVoiceConnectorInput } from "./AssociatePhoneNumbersWithVoiceConnectorInput";
import { AssociatePhoneNumbersWithVoiceConnectorOutput } from "./AssociatePhoneNumbersWithVoiceConnectorOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociatePhoneNumbersWithVoiceConnector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociatePhoneNumbersWithVoiceConnector",
  http: {
    method: "POST",
    requestUri:
      "/voice-connectors/{voiceConnectorId}?operation=associate-phone-numbers"
  },
  input: {
    shape: AssociatePhoneNumbersWithVoiceConnectorInput
  },
  output: {
    shape: AssociatePhoneNumbersWithVoiceConnectorOutput
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
