import { DisassociatePhoneNumbersFromVoiceConnectorInput } from "../shapes/DisassociatePhoneNumbersFromVoiceConnectorInput";
import { DisassociatePhoneNumbersFromVoiceConnectorOutput } from "../shapes/DisassociatePhoneNumbersFromVoiceConnectorOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
