import { GetRecordsInput } from "./GetRecordsInput";
import { GetRecordsOutput } from "./GetRecordsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerError } from "./InternalServerError";
import { ExpiredIteratorException } from "./ExpiredIteratorException";
import { TrimmedDataAccessException } from "./TrimmedDataAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRecords: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRecords",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRecordsInput
  },
  output: {
    shape: GetRecordsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ExpiredIteratorException
    },
    {
      shape: TrimmedDataAccessException
    }
  ]
};
