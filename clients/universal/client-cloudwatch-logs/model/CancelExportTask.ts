import { CancelExportTaskInput } from "./CancelExportTaskInput";
import { CancelExportTaskOutput } from "./CancelExportTaskOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
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
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidOperationException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
