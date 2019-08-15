import { AssociateVpcCidrBlockInput } from "../shapes/AssociateVpcCidrBlockInput";
import { AssociateVpcCidrBlockOutput } from "../shapes/AssociateVpcCidrBlockOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateVpcCidrBlock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateVpcCidrBlock",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateVpcCidrBlockInput
  },
  output: {
    shape: AssociateVpcCidrBlockOutput
  },
  errors: []
};
