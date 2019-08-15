import { PutEmailIdentityMailFromAttributesInput } from "../shapes/PutEmailIdentityMailFromAttributesInput";
import { PutEmailIdentityMailFromAttributesOutput } from "../shapes/PutEmailIdentityMailFromAttributesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
