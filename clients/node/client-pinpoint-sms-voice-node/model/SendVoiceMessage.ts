import { SendVoiceMessageInput } from "./SendVoiceMessageInput";
import { SendVoiceMessageOutput } from "./SendVoiceMessageOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SendVoiceMessage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendVoiceMessage",
  http: {
    method: "POST",
    requestUri: "/v1/sms-voice/voice/message"
  },
  input: {
    shape: SendVoiceMessageInput
  },
  output: {
    shape: SendVoiceMessageOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
