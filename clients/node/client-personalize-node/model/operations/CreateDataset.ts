import { CreateDatasetInput } from "../shapes/CreateDatasetInput";
import { CreateDatasetOutput } from "../shapes/CreateDatasetOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
