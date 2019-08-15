import { CreateAlgorithmInput } from "../shapes/CreateAlgorithmInput";
import { CreateAlgorithmOutput } from "../shapes/CreateAlgorithmOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateAlgorithm: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAlgorithm",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAlgorithmInput
  },
  output: {
    shape: CreateAlgorithmOutput
  },
  errors: []
};
