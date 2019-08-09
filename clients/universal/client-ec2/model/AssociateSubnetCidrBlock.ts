import { AssociateSubnetCidrBlockInput } from "./AssociateSubnetCidrBlockInput";
import { AssociateSubnetCidrBlockOutput } from "./AssociateSubnetCidrBlockOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateSubnetCidrBlock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateSubnetCidrBlock",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateSubnetCidrBlockInput
  },
  output: {
    shape: AssociateSubnetCidrBlockOutput
  },
  errors: []
};
