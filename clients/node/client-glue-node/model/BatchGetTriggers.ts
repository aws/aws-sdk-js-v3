import { BatchGetTriggersInput } from "./BatchGetTriggersInput";
import { BatchGetTriggersOutput } from "./BatchGetTriggersOutput";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchGetTriggers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetTriggers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetTriggersInput
  },
  output: {
    shape: BatchGetTriggersOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: InvalidInputException
    }
  ]
};
