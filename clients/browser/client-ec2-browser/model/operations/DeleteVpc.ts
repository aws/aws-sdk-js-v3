import { DeleteVpcInput } from "../shapes/DeleteVpcInput";
import { DeleteVpcOutput } from "../shapes/DeleteVpcOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVpc: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVpc",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVpcInput
  },
  output: {
    shape: DeleteVpcOutput
  },
  errors: []
};
