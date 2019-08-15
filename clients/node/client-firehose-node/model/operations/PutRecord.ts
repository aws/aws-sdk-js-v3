import { PutRecordInput } from "../shapes/PutRecordInput";
import { PutRecordOutput } from "../shapes/PutRecordOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
