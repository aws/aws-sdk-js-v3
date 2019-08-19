import { UpdateTableInput } from "../shapes/UpdateTableInput";
import { UpdateTableOutput } from "../shapes/UpdateTableOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTableInput
  },
  output: {
    shape: UpdateTableOutput
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
