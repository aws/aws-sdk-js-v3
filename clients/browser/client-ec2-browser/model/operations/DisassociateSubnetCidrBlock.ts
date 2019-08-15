import { DisassociateSubnetCidrBlockInput } from "../shapes/DisassociateSubnetCidrBlockInput";
import { DisassociateSubnetCidrBlockOutput } from "../shapes/DisassociateSubnetCidrBlockOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateSubnetCidrBlock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateSubnetCidrBlock",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateSubnetCidrBlockInput
  },
  output: {
    shape: DisassociateSubnetCidrBlockOutput
  },
  errors: []
};
