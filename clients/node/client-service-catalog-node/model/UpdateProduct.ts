import { UpdateProductInput } from "./UpdateProductInput";
import { UpdateProductOutput } from "./UpdateProductOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateProduct",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateProductInput
  },
  output: {
    shape: UpdateProductOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    },
    {
      shape: TagOptionNotMigratedException
    }
  ]
};
