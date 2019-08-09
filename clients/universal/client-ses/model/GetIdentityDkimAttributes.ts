import { GetIdentityDkimAttributesInput } from "./GetIdentityDkimAttributesInput";
import { GetIdentityDkimAttributesOutput } from "./GetIdentityDkimAttributesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetIdentityDkimAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIdentityDkimAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetIdentityDkimAttributesInput
  },
  output: {
    shape: GetIdentityDkimAttributesOutput,
    resultWrapper: "GetIdentityDkimAttributesResult"
  },
  errors: []
};
