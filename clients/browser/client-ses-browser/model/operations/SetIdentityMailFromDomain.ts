import { SetIdentityMailFromDomainInput } from "../shapes/SetIdentityMailFromDomainInput";
import { SetIdentityMailFromDomainOutput } from "../shapes/SetIdentityMailFromDomainOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetIdentityMailFromDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetIdentityMailFromDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetIdentityMailFromDomainInput
  },
  output: {
    shape: SetIdentityMailFromDomainOutput,
    resultWrapper: "SetIdentityMailFromDomainResult"
  },
  errors: []
};
