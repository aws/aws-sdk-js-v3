import { GetShardIteratorInput } from "./GetShardIteratorInput";
import { GetShardIteratorOutput } from "./GetShardIteratorOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { TrimmedDataAccessException } from "./TrimmedDataAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetShardIterator: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetShardIterator",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetShardIteratorInput
  },
  output: {
    shape: GetShardIteratorOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerError
    },
    {
      shape: TrimmedDataAccessException
    }
  ]
};
