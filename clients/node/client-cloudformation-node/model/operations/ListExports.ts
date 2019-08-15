import { ListExportsInput } from "../shapes/ListExportsInput";
import { ListExportsOutput } from "../shapes/ListExportsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListExports: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListExports",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListExportsInput
  },
  output: {
    shape: ListExportsOutput,
    resultWrapper: "ListExportsResult"
  },
  errors: []
};
