import { BatchGetTriggersInput } from "../shapes/BatchGetTriggersInput";
import { BatchGetTriggersOutput } from "../shapes/BatchGetTriggersOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
