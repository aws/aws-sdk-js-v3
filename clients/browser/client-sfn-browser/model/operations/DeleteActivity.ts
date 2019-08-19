import { DeleteActivityInput } from "../shapes/DeleteActivityInput";
import { DeleteActivityOutput } from "../shapes/DeleteActivityOutput";
import { InvalidArn } from "../shapes/InvalidArn";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteActivity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteActivity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteActivityInput
  },
  output: {
    shape: DeleteActivityOutput
  },
  errors: [
    {
      shape: InvalidArn
    }
  ]
};
