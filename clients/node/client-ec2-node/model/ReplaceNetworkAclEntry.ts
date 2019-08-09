import { ReplaceNetworkAclEntryInput } from "./ReplaceNetworkAclEntryInput";
import { ReplaceNetworkAclEntryOutput } from "./ReplaceNetworkAclEntryOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ReplaceNetworkAclEntry: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReplaceNetworkAclEntry",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReplaceNetworkAclEntryInput
  },
  output: {
    shape: ReplaceNetworkAclEntryOutput
  },
  errors: []
};
