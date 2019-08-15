import { DeleteDataSourceInput } from "../shapes/DeleteDataSourceInput";
import { DeleteDataSourceOutput } from "../shapes/DeleteDataSourceOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDataSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDataSource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDataSourceInput
  },
  output: {
    shape: DeleteDataSourceOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
