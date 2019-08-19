import { PutEmailIdentityDkimAttributesInput } from "../shapes/PutEmailIdentityDkimAttributesInput";
import { PutEmailIdentityDkimAttributesOutput } from "../shapes/PutEmailIdentityDkimAttributesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
