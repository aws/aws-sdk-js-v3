import { DeleteDatabaseInput } from "../shapes/DeleteDatabaseInput";
import { DeleteDatabaseOutput } from "../shapes/DeleteDatabaseOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDatabase: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDatabase",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDatabaseInput
  },
  output: {
    shape: DeleteDatabaseOutput
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
