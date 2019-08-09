import { DeleteDatabaseInput } from "./DeleteDatabaseInput";
import { DeleteDatabaseOutput } from "./DeleteDatabaseOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
