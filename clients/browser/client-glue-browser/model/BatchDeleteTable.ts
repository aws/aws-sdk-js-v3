import { BatchDeleteTableInput } from "./BatchDeleteTableInput";
import { BatchDeleteTableOutput } from "./BatchDeleteTableOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchDeleteTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDeleteTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDeleteTableInput
  },
  output: {
    shape: BatchDeleteTableOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
