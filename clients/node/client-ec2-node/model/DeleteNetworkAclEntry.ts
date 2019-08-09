import { DeleteNetworkAclEntryInput } from "./DeleteNetworkAclEntryInput";
import { DeleteNetworkAclEntryOutput } from "./DeleteNetworkAclEntryOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteNetworkAclEntry: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNetworkAclEntry",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNetworkAclEntryInput
  },
  output: {
    shape: DeleteNetworkAclEntryOutput
  },
  errors: []
};
