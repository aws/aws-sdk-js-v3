import { DeleteAppInput } from "../shapes/DeleteAppInput";
import { DeleteAppOutput } from "../shapes/DeleteAppOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAppInput
  },
  output: {
    shape: DeleteAppOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
