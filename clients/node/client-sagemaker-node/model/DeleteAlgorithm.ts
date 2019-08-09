import { DeleteAlgorithmInput } from "./DeleteAlgorithmInput";
import { DeleteAlgorithmOutput } from "./DeleteAlgorithmOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
