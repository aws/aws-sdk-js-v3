import { RejectVpcPeeringConnectionInput } from "../shapes/RejectVpcPeeringConnectionInput";
import { RejectVpcPeeringConnectionOutput } from "../shapes/RejectVpcPeeringConnectionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RejectVpcPeeringConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RejectVpcPeeringConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RejectVpcPeeringConnectionInput
  },
  output: {
    shape: RejectVpcPeeringConnectionOutput
  },
  errors: []
};
