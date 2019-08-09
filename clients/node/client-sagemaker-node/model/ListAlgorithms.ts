import { ListAlgorithmsInput } from "./ListAlgorithmsInput";
import { ListAlgorithmsOutput } from "./ListAlgorithmsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAlgorithms: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAlgorithms",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAlgorithmsInput
  },
  output: {
    shape: ListAlgorithmsOutput
  },
  errors: []
};
