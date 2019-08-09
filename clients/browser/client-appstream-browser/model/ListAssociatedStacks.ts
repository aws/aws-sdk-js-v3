import { ListAssociatedStacksInput } from "./ListAssociatedStacksInput";
import { ListAssociatedStacksOutput } from "./ListAssociatedStacksOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAssociatedStacks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAssociatedStacks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAssociatedStacksInput
  },
  output: {
    shape: ListAssociatedStacksOutput
  },
  errors: []
};
