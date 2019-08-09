import { BatchDeleteTableVersionInput } from "./BatchDeleteTableVersionInput";
import { BatchDeleteTableVersionOutput } from "./BatchDeleteTableVersionOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
