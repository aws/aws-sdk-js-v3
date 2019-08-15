import { DeleteTableInput } from "../shapes/DeleteTableInput";
import { DeleteTableOutput } from "../shapes/DeleteTableOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTableInput
  },
  output: {
    shape: DeleteTableOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServerError
    }
  ]
};
