import { ListStackSetOperationResultsInput } from "./ListStackSetOperationResultsInput";
import { ListStackSetOperationResultsOutput } from "./ListStackSetOperationResultsOutput";
import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { OperationNotFoundException } from "./OperationNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListStackSetOperationResults: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStackSetOperationResults",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListStackSetOperationResultsInput
  },
  output: {
    shape: ListStackSetOperationResultsOutput,
    resultWrapper: "ListStackSetOperationResultsResult"
  },
  errors: [
    {
      shape: StackSetNotFoundException
    },
    {
      shape: OperationNotFoundException
    }
  ]
};
