import { DeleteVpcPeeringConnectionInput } from "../shapes/DeleteVpcPeeringConnectionInput";
import { DeleteVpcPeeringConnectionOutput } from "../shapes/DeleteVpcPeeringConnectionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVpcPeeringConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVpcPeeringConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVpcPeeringConnectionInput
  },
  output: {
    shape: DeleteVpcPeeringConnectionOutput
  },
  errors: []
};
