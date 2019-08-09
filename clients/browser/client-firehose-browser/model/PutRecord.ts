import { PutRecordInput } from "./PutRecordInput";
import { PutRecordOutput } from "./PutRecordOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutRecord: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutRecord",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutRecordInput
  },
  output: {
    shape: PutRecordOutput
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
