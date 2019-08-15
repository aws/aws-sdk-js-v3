import { DeletePlacementGroupInput } from "../shapes/DeletePlacementGroupInput";
import { DeletePlacementGroupOutput } from "../shapes/DeletePlacementGroupOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePlacementGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePlacementGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePlacementGroupInput
  },
  output: {
    shape: DeletePlacementGroupOutput
  },
  errors: []
};
