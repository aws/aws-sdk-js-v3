import { PutAccountSendingAttributesInput } from "../shapes/PutAccountSendingAttributesInput";
import { PutAccountSendingAttributesOutput } from "../shapes/PutAccountSendingAttributesOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutAccountSendingAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutAccountSendingAttributes",
  http: {
    method: "PUT",
    requestUri: "/v1/email/account/sending"
  },
  input: {
    shape: PutAccountSendingAttributesInput
  },
  output: {
    shape: PutAccountSendingAttributesOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
