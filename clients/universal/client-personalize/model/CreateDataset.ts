import { CreateDatasetInput } from "./CreateDatasetInput";
import { CreateDatasetOutput } from "./CreateDatasetOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDataset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDataset",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDatasetInput
  },
  output: {
    shape: CreateDatasetOutput
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
    },
    {
      shape: ResourceInUseException
    }
  ]
};
