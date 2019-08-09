import { DisassociatePhoneNumbersFromVoiceConnectorInput } from "./DisassociatePhoneNumbersFromVoiceConnectorInput";
import { DisassociatePhoneNumbersFromVoiceConnectorOutput } from "./DisassociatePhoneNumbersFromVoiceConnectorOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociatePhoneNumbersFromVoiceConnector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociatePhoneNumbersFromVoiceConnector",
  http: {
    method: "POST",
    requestUri:
      "/voice-connectors/{voiceConnectorId}?operation=disassociate-phone-numbers"
  },
  input: {
    shape: DisassociatePhoneNumbersFromVoiceConnectorInput
  },
  output: {
    shape: DisassociatePhoneNumbersFromVoiceConnectorOutput
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
