import { DeleteTargetGroupInput } from "../shapes/DeleteTargetGroupInput";
import { DeleteTargetGroupOutput } from "../shapes/DeleteTargetGroupOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTargetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTargetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTargetGroupInput
  },
  output: {
    shape: DeleteTargetGroupOutput,
    resultWrapper: "DeleteTargetGroupResult"
  },
  errors: [
    {
      shape: ResourceInUseException
    }
  ]
};
