import { StartOutboundVoiceContactInput } from "./StartOutboundVoiceContactInput";
import { StartOutboundVoiceContactOutput } from "./StartOutboundVoiceContactOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { LimitExceededException } from "./LimitExceededException";
import { DestinationNotAllowedException } from "./DestinationNotAllowedException";
import { OutboundContactNotPermittedException } from "./OutboundContactNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
