import { DeleteSourceCredentialsInput } from "../shapes/DeleteSourceCredentialsInput";
import { DeleteSourceCredentialsOutput } from "../shapes/DeleteSourceCredentialsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSourceCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSourceCredentials",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSourceCredentialsInput
  },
  output: {
    shape: DeleteSourceCredentialsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
