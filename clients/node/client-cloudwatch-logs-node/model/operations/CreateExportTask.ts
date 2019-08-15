import { CreateExportTaskInput } from "../shapes/CreateExportTaskInput";
import { CreateExportTaskOutput } from "../shapes/CreateExportTaskOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
