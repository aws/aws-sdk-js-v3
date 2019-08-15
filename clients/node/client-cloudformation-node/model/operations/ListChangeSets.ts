import { ListChangeSetsInput } from "../shapes/ListChangeSetsInput";
import { ListChangeSetsOutput } from "../shapes/ListChangeSetsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListChangeSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListChangeSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListChangeSetsInput
  },
  output: {
    shape: ListChangeSetsOutput,
    resultWrapper: "ListChangeSetsResult"
  },
  errors: []
};
