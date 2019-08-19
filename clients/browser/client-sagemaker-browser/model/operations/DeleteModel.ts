import { DeleteModelInput } from "../shapes/DeleteModelInput";
import { DeleteModelOutput } from "../shapes/DeleteModelOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteModel",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteModelInput
  },
  output: {
    shape: DeleteModelOutput
  },
  errors: []
};
