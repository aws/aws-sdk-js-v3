import { GetTagValuesInput } from "./GetTagValuesInput";
import { GetTagValuesOutput } from "./GetTagValuesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottledException } from "./ThrottledException";
import { InternalServiceException } from "./InternalServiceException";
import { PaginationTokenExpiredException } from "./PaginationTokenExpiredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTagValues: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTagValues",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTagValuesInput
  },
  output: {
    shape: GetTagValuesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ThrottledException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: PaginationTokenExpiredException
    }
  ]
};
