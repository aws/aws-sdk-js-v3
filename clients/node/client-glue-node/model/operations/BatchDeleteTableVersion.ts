import { BatchDeleteTableVersionInput } from "../shapes/BatchDeleteTableVersionInput";
import { BatchDeleteTableVersionOutput } from "../shapes/BatchDeleteTableVersionOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDeleteTableVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDeleteTableVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDeleteTableVersionInput
  },
  output: {
    shape: BatchDeleteTableVersionOutput
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
