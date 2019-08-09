import { DeleteAppInput } from "./DeleteAppInput";
import { DeleteAppOutput } from "./DeleteAppOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
