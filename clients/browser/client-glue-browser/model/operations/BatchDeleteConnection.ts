import { BatchDeleteConnectionInput } from "../shapes/BatchDeleteConnectionInput";
import { BatchDeleteConnectionOutput } from "../shapes/BatchDeleteConnectionOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDeleteConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDeleteConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDeleteConnectionInput
  },
  output: {
    shape: BatchDeleteConnectionOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
