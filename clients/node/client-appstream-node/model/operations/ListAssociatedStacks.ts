import { ListAssociatedStacksInput } from "../shapes/ListAssociatedStacksInput";
import { ListAssociatedStacksOutput } from "../shapes/ListAssociatedStacksOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
