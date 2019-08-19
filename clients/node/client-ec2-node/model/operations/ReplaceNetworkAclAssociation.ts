import { ReplaceNetworkAclAssociationInput } from "../shapes/ReplaceNetworkAclAssociationInput";
import { ReplaceNetworkAclAssociationOutput } from "../shapes/ReplaceNetworkAclAssociationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReplaceNetworkAclAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReplaceNetworkAclAssociation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReplaceNetworkAclAssociationInput
  },
  output: {
    shape: ReplaceNetworkAclAssociationOutput
  },
  errors: []
};
