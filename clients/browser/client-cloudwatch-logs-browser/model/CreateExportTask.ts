import { CreateExportTaskInput } from "./CreateExportTaskInput";
import { CreateExportTaskOutput } from "./CreateExportTaskOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateExportTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateExportTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateExportTaskInput
  },
  output: {
    shape: CreateExportTaskOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: OperationAbortedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceAlreadyExistsException
    }
  ]
};
