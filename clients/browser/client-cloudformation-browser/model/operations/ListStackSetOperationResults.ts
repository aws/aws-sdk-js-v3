import { ListStackSetOperationResultsInput } from "../shapes/ListStackSetOperationResultsInput";
import { ListStackSetOperationResultsOutput } from "../shapes/ListStackSetOperationResultsOutput";
import { StackSetNotFoundException } from "../shapes/StackSetNotFoundException";
import { OperationNotFoundException } from "../shapes/OperationNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
