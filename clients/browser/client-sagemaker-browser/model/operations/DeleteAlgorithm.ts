import { DeleteAlgorithmInput } from "../shapes/DeleteAlgorithmInput";
import { DeleteAlgorithmOutput } from "../shapes/DeleteAlgorithmOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteAlgorithm: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAlgorithm",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAlgorithmInput
  },
  output: {
    shape: DeleteAlgorithmOutput
  },
  errors: []
};
