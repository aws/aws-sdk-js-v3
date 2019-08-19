import { UpdateTableInput } from "../shapes/UpdateTableInput";
import { UpdateTableOutput } from "../shapes/UpdateTableOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
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
