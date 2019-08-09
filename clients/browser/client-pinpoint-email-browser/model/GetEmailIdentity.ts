import { GetEmailIdentityInput } from "./GetEmailIdentityInput";
import { GetEmailIdentityOutput } from "./GetEmailIdentityOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetEmailIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEmailIdentity",
  http: {
    method: "GET",
    requestUri: "/v1/email/identities/{EmailIdentity}"
  },
  input: {
    shape: GetEmailIdentityInput
  },
  output: {
    shape: GetEmailIdentityOutput
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
