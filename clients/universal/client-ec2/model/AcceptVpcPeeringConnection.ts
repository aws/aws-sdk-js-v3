import { AcceptVpcPeeringConnectionInput } from "./AcceptVpcPeeringConnectionInput";
import { AcceptVpcPeeringConnectionOutput } from "./AcceptVpcPeeringConnectionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AcceptVpcPeeringConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptVpcPeeringConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcceptVpcPeeringConnectionInput
  },
  output: {
    shape: AcceptVpcPeeringConnectionOutput
  },
  errors: []
};
