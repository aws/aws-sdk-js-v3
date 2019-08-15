import { GetTagValuesInput } from "../shapes/GetTagValuesInput";
import { GetTagValuesOutput } from "../shapes/GetTagValuesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ThrottledException } from "../shapes/ThrottledException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { PaginationTokenExpiredException } from "../shapes/PaginationTokenExpiredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
