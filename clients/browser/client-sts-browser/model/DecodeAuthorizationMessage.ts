import { DecodeAuthorizationMessageInput } from "./DecodeAuthorizationMessageInput";
import { DecodeAuthorizationMessageOutput } from "./DecodeAuthorizationMessageOutput";
import { InvalidAuthorizationMessageException } from "./InvalidAuthorizationMessageException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
