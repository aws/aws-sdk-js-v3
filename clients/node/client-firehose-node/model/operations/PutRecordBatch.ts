import { PutRecordBatchInput } from "../shapes/PutRecordBatchInput";
import { PutRecordBatchOutput } from "../shapes/PutRecordBatchOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
