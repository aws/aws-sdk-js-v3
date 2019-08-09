import { ReplaceRouteTableAssociationInput } from "./ReplaceRouteTableAssociationInput";
import { ReplaceRouteTableAssociationOutput } from "./ReplaceRouteTableAssociationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ReplaceRouteTableAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReplaceRouteTableAssociation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReplaceRouteTableAssociationInput
  },
  output: {
    shape: ReplaceRouteTableAssociationOutput
  },
  errors: []
};
