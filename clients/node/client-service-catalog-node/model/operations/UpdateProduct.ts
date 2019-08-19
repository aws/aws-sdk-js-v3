import { UpdateProductInput } from "../shapes/UpdateProductInput";
import { UpdateProductOutput } from "../shapes/UpdateProductOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
