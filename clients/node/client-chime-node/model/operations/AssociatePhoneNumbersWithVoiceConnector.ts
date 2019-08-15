import { AssociatePhoneNumbersWithVoiceConnectorInput } from "../shapes/AssociatePhoneNumbersWithVoiceConnectorInput";
import { AssociatePhoneNumbersWithVoiceConnectorOutput } from "../shapes/AssociatePhoneNumbersWithVoiceConnectorOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
