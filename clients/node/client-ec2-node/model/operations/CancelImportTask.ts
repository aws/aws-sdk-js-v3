import { CancelImportTaskInput } from "../shapes/CancelImportTaskInput";
import { CancelImportTaskOutput } from "../shapes/CancelImportTaskOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelImportTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelImportTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelImportTaskInput
  },
  output: {
    shape: CancelImportTaskOutput
  },
  errors: []
};
