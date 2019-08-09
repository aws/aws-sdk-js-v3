import { DeleteSchemaInput } from "./DeleteSchemaInput";
import { DeleteSchemaOutput } from "./DeleteSchemaOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
