import { ImportImageInput } from "../shapes/ImportImageInput";
import { ImportImageOutput } from "../shapes/ImportImageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ImportImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportImageInput
  },
  output: {
    shape: ImportImageOutput
  },
  errors: []
};
