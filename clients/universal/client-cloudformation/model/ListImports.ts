import { ListImportsInput } from "./ListImportsInput";
import { ListImportsOutput } from "./ListImportsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListImports: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListImports",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListImportsInput
  },
  output: {
    shape: ListImportsOutput,
    resultWrapper: "ListImportsResult"
  },
  errors: []
};
