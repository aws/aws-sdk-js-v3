import { ListPartsInput } from "./ListPartsInput";
import { ListPartsOutput } from "./ListPartsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListParts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListParts",
  http: {
    method: "GET",
    requestUri: "/{Bucket}/{Key+}"
  },
  input: {
    shape: ListPartsInput
  },
  output: {
    shape: ListPartsOutput
  },
  errors: []
};
