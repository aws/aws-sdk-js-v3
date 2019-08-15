import { GetRecordsInput } from "../shapes/GetRecordsInput";
import { GetRecordsOutput } from "../shapes/GetRecordsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ExpiredIteratorException } from "../shapes/ExpiredIteratorException";
import { TrimmedDataAccessException } from "../shapes/TrimmedDataAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
