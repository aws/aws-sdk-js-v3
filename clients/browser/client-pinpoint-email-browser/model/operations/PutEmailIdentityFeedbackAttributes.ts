import { PutEmailIdentityFeedbackAttributesInput } from "../shapes/PutEmailIdentityFeedbackAttributesInput";
import { PutEmailIdentityFeedbackAttributesOutput } from "../shapes/PutEmailIdentityFeedbackAttributesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutEmailIdentityFeedbackAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutEmailIdentityFeedbackAttributes",
  http: {
    method: "PUT",
    requestUri: "/v1/email/identities/{EmailIdentity}/feedback"
  },
  input: {
    shape: PutEmailIdentityFeedbackAttributesInput
  },
  output: {
    shape: PutEmailIdentityFeedbackAttributesOutput
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
