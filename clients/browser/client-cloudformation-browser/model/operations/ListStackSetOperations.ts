import { ListStackSetOperationsInput } from "../shapes/ListStackSetOperationsInput";
import { ListStackSetOperationsOutput } from "../shapes/ListStackSetOperationsOutput";
import { StackSetNotFoundException } from "../shapes/StackSetNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListStackSetOperations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStackSetOperations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListStackSetOperationsInput
  },
  output: {
    shape: ListStackSetOperationsOutput,
    resultWrapper: "ListStackSetOperationsResult"
  },
  errors: [
    {
      shape: StackSetNotFoundException
    }
  ]
};
