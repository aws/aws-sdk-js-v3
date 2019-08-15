import { DeleteTableInput } from "../shapes/DeleteTableInput";
import { DeleteTableOutput } from "../shapes/DeleteTableOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
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
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
