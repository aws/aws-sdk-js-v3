import { CreateDatasetImportJobInput } from "../shapes/CreateDatasetImportJobInput";
import { CreateDatasetImportJobOutput } from "../shapes/CreateDatasetImportJobOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
