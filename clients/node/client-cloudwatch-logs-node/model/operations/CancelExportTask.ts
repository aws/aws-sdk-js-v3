import { CancelExportTaskInput } from "../shapes/CancelExportTaskInput";
import { CancelExportTaskOutput } from "../shapes/CancelExportTaskOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
