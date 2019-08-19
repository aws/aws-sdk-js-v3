import { ListAvailableSolutionStacksInput } from "../shapes/ListAvailableSolutionStacksInput";
import { ListAvailableSolutionStacksOutput } from "../shapes/ListAvailableSolutionStacksOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAvailableSolutionStacks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAvailableSolutionStacks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAvailableSolutionStacksInput
  },
  output: {
    shape: ListAvailableSolutionStacksOutput,
    resultWrapper: "ListAvailableSolutionStacksResult"
  },
  errors: []
};
