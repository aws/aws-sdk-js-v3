import { PutEmailIdentityDkimAttributesInput } from "./PutEmailIdentityDkimAttributesInput";
import { PutEmailIdentityDkimAttributesOutput } from "./PutEmailIdentityDkimAttributesOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutEmailIdentityDkimAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutEmailIdentityDkimAttributes",
  http: {
    method: "PUT",
    requestUri: "/v1/email/identities/{EmailIdentity}/dkim"
  },
  input: {
    shape: PutEmailIdentityDkimAttributesInput
  },
  output: {
    shape: PutEmailIdentityDkimAttributesOutput
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
