import { DeleteSchemaInput } from "../shapes/DeleteSchemaInput";
import { DeleteSchemaOutput } from "../shapes/DeleteSchemaOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSchema: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSchema",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSchemaInput
  },
  output: {
    shape: DeleteSchemaOutput
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
