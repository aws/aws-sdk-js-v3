import { PutRecordBatchInput } from "./PutRecordBatchInput";
import { PutRecordBatchOutput } from "./PutRecordBatchOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutRecordBatch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutRecordBatch",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutRecordBatchInput
  },
  output: {
    shape: PutRecordBatchOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
