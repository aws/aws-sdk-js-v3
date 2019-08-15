import { DeleteFleetsInput } from "../shapes/DeleteFleetsInput";
import { DeleteFleetsOutput } from "../shapes/DeleteFleetsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFleets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFleets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteFleetsInput
  },
  output: {
    shape: DeleteFleetsOutput
  },
  errors: []
};
