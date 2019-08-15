import { BatchDeleteTableInput } from "../shapes/BatchDeleteTableInput";
import { BatchDeleteTableOutput } from "../shapes/BatchDeleteTableOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
