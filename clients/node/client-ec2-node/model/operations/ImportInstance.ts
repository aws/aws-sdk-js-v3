import { ImportInstanceInput } from "../shapes/ImportInstanceInput";
import { ImportInstanceOutput } from "../shapes/ImportInstanceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ImportInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportInstanceInput
  },
  output: {
    shape: ImportInstanceOutput
  },
  errors: []
};
