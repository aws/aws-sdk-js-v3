import { DecodeAuthorizationMessageInput } from "../shapes/DecodeAuthorizationMessageInput";
import { DecodeAuthorizationMessageOutput } from "../shapes/DecodeAuthorizationMessageOutput";
import { InvalidAuthorizationMessageException } from "../shapes/InvalidAuthorizationMessageException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DecodeAuthorizationMessage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DecodeAuthorizationMessage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DecodeAuthorizationMessageInput
  },
  output: {
    shape: DecodeAuthorizationMessageOutput,
    resultWrapper: "DecodeAuthorizationMessageResult"
  },
  errors: [
    {
      shape: InvalidAuthorizationMessageException
    }
  ]
};
