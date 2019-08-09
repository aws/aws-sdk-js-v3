import { PutEmailIdentityFeedbackAttributesInput } from "./PutEmailIdentityFeedbackAttributesInput";
import { PutEmailIdentityFeedbackAttributesOutput } from "./PutEmailIdentityFeedbackAttributesOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
