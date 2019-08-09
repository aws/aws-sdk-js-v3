import { ListAssociatedFleetsInput } from "./ListAssociatedFleetsInput";
import { ListAssociatedFleetsOutput } from "./ListAssociatedFleetsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAssociatedFleets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAssociatedFleets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAssociatedFleetsInput
  },
  output: {
    shape: ListAssociatedFleetsOutput
  },
  errors: []
};
