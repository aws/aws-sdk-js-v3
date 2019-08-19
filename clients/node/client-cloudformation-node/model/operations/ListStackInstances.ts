import { ListStackInstancesInput } from "../shapes/ListStackInstancesInput";
import { ListStackInstancesOutput } from "../shapes/ListStackInstancesOutput";
import { StackSetNotFoundException } from "../shapes/StackSetNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListStackInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStackInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListStackInstancesInput
  },
  output: {
    shape: ListStackInstancesOutput,
    resultWrapper: "ListStackInstancesResult"
  },
  errors: [
    {
      shape: StackSetNotFoundException
    }
  ]
};
