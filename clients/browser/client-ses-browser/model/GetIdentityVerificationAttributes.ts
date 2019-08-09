import { GetIdentityVerificationAttributesInput } from "./GetIdentityVerificationAttributesInput";
import { GetIdentityVerificationAttributesOutput } from "./GetIdentityVerificationAttributesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetIdentityVerificationAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIdentityVerificationAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetIdentityVerificationAttributesInput
  },
  output: {
    shape: GetIdentityVerificationAttributesOutput,
    resultWrapper: "GetIdentityVerificationAttributesResult"
  },
  errors: []
};
