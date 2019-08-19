import { DeleteProductInput } from "../shapes/DeleteProductInput";
import { DeleteProductOutput } from "../shapes/DeleteProductOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteProduct",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteProductInput
  },
  output: {
    shape: DeleteProductOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidParametersException
    },
    {
      shape: TagOptionNotMigratedException
    }
  ]
};
