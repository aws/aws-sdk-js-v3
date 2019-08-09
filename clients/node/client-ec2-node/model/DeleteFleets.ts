import { DeleteFleetsInput } from "./DeleteFleetsInput";
import { DeleteFleetsOutput } from "./DeleteFleetsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
