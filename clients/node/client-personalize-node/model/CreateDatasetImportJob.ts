import { CreateDatasetImportJobInput } from "./CreateDatasetImportJobInput";
import { CreateDatasetImportJobOutput } from "./CreateDatasetImportJobOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDatasetImportJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDatasetImportJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDatasetImportJobInput
  },
  output: {
    shape: CreateDatasetImportJobOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: LimitExceededException
    }
  ]
};
