import { DisassociateRouteTableInput } from "./DisassociateRouteTableInput";
import { DisassociateRouteTableOutput } from "./DisassociateRouteTableOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateRouteTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateRouteTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateRouteTableInput
  },
  output: {
    shape: DisassociateRouteTableOutput
  },
  errors: []
};
