import { CreateInstanceExportTaskInput } from "../shapes/CreateInstanceExportTaskInput";
import { CreateInstanceExportTaskOutput } from "../shapes/CreateInstanceExportTaskOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateInstanceExportTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateInstanceExportTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateInstanceExportTaskInput
  },
  output: {
    shape: CreateInstanceExportTaskOutput
  },
  errors: []
};
