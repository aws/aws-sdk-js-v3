import { DeleteProductInput } from "./DeleteProductInput";
import { DeleteProductOutput } from "./DeleteProductOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidParametersException } from "./InvalidParametersException";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
