import { DeleteDatasetInput } from "../shapes/DeleteDatasetInput";
import { DeleteDatasetOutput } from "../shapes/DeleteDatasetOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDataset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDataset",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDatasetInput
  },
  output: {
    shape: DeleteDatasetOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
