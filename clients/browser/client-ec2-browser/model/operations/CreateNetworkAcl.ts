import { CreateNetworkAclInput } from "../shapes/CreateNetworkAclInput";
import { CreateNetworkAclOutput } from "../shapes/CreateNetworkAclOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateNetworkAcl: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNetworkAcl",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateNetworkAclInput
  },
  output: {
    shape: CreateNetworkAclOutput
  },
  errors: []
};
