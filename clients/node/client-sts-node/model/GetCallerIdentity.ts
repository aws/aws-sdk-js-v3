import { GetCallerIdentityInput } from "./GetCallerIdentityInput";
import { GetCallerIdentityOutput } from "./GetCallerIdentityOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCallerIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCallerIdentity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCallerIdentityInput
  },
  output: {
    shape: GetCallerIdentityOutput,
    resultWrapper: "GetCallerIdentityResult"
  },
  errors: []
};
