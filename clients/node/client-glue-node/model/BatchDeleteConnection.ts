import { BatchDeleteConnectionInput } from "./BatchDeleteConnectionInput";
import { BatchDeleteConnectionOutput } from "./BatchDeleteConnectionOutput";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
