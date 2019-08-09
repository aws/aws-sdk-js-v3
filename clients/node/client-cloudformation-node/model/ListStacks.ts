import { ListStacksInput } from "./ListStacksInput";
import { ListStacksOutput } from "./ListStacksOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListStacks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStacks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListStacksInput
  },
  output: {
    shape: ListStacksOutput,
    resultWrapper: "ListStacksResult"
  },
  errors: []
};
