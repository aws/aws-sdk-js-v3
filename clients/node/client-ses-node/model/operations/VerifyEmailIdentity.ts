import { VerifyEmailIdentityInput } from "../shapes/VerifyEmailIdentityInput";
import { VerifyEmailIdentityOutput } from "../shapes/VerifyEmailIdentityOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const VerifyEmailIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "VerifyEmailIdentity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: VerifyEmailIdentityInput
  },
  output: {
    shape: VerifyEmailIdentityOutput,
    resultWrapper: "VerifyEmailIdentityResult"
  },
  errors: []
};
