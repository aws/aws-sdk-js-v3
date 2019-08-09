import { UpdateTableInput } from "./UpdateTableInput";
import { UpdateTableOutput } from "./UpdateTableOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ResourceNumberLimitExceededException
    },
    {
      shape: GlueEncryptionException
    }
  ]
};
