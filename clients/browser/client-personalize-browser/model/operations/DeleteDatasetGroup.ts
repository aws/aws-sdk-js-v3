import { DeleteDatasetGroupInput } from "../shapes/DeleteDatasetGroupInput";
import { DeleteDatasetGroupOutput } from "../shapes/DeleteDatasetGroupOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDatasetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDatasetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDatasetGroupInput
  },
  output: {
    shape: DeleteDatasetGroupOutput
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
