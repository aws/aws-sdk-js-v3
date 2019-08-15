import { StartOutboundVoiceContactInput } from "../shapes/StartOutboundVoiceContactInput";
import { StartOutboundVoiceContactOutput } from "../shapes/StartOutboundVoiceContactOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { DestinationNotAllowedException } from "../shapes/DestinationNotAllowedException";
import { OutboundContactNotPermittedException } from "../shapes/OutboundContactNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartOutboundVoiceContact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartOutboundVoiceContact",
  http: {
    method: "PUT",
    requestUri: "/contact/outbound-voice"
  },
  input: {
    shape: StartOutboundVoiceContactInput
  },
  output: {
    shape: StartOutboundVoiceContactOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: DestinationNotAllowedException
    },
    {
      shape: OutboundContactNotPermittedException
    }
  ]
};
