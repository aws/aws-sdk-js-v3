import { DeleteTableInput } from "./DeleteTableInput";
import { DeleteTableOutput } from "./DeleteTableOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
