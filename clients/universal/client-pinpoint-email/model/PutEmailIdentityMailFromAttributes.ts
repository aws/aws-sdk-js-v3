import { PutEmailIdentityMailFromAttributesInput } from "./PutEmailIdentityMailFromAttributesInput";
import { PutEmailIdentityMailFromAttributesOutput } from "./PutEmailIdentityMailFromAttributesOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutEmailIdentityMailFromAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutEmailIdentityMailFromAttributes",
  http: {
    method: "PUT",
    requestUri: "/v1/email/identities/{EmailIdentity}/mail-from"
  },
  input: {
    shape: PutEmailIdentityMailFromAttributesInput
  },
  output: {
    shape: PutEmailIdentityMailFromAttributesOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
