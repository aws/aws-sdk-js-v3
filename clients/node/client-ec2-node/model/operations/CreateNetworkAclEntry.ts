import { CreateNetworkAclEntryInput } from "../shapes/CreateNetworkAclEntryInput";
import { CreateNetworkAclEntryOutput } from "../shapes/CreateNetworkAclEntryOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateNetworkAclEntry: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNetworkAclEntry",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateNetworkAclEntryInput
  },
  output: {
    shape: CreateNetworkAclEntryOutput
  },
  errors: []
};
