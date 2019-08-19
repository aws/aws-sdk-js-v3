import { DeleteSubnetInput } from "../shapes/DeleteSubnetInput";
import { DeleteSubnetOutput } from "../shapes/DeleteSubnetOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSubnet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSubnet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSubnetInput
  },
  output: {
    shape: DeleteSubnetOutput
  },
  errors: []
};
