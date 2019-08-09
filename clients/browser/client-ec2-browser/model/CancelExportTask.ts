import { CancelExportTaskInput } from "./CancelExportTaskInput";
import { CancelExportTaskOutput } from "./CancelExportTaskOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CancelExportTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelExportTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelExportTaskInput
  },
  output: {
    shape: CancelExportTaskOutput
  },
  errors: []
};
