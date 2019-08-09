import { DisassociateVpcCidrBlockInput } from "./DisassociateVpcCidrBlockInput";
import { DisassociateVpcCidrBlockOutput } from "./DisassociateVpcCidrBlockOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateVpcCidrBlock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateVpcCidrBlock",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateVpcCidrBlockInput
  },
  output: {
    shape: DisassociateVpcCidrBlockOutput
  },
  errors: []
};
