import { AssociateRouteTableInput } from "./AssociateRouteTableInput";
import { AssociateRouteTableOutput } from "./AssociateRouteTableOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateRouteTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateRouteTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateRouteTableInput
  },
  output: {
    shape: AssociateRouteTableOutput
  },
  errors: []
};
