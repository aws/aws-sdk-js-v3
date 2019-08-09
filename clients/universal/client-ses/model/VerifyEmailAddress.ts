import { VerifyEmailAddressInput } from "./VerifyEmailAddressInput";
import { VerifyEmailAddressOutput } from "./VerifyEmailAddressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const VerifyEmailAddress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "VerifyEmailAddress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: VerifyEmailAddressInput
  },
  output: {
    shape: VerifyEmailAddressOutput
  },
  errors: []
};
