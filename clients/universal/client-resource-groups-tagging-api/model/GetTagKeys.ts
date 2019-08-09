import { GetTagKeysInput } from "./GetTagKeysInput";
import { GetTagKeysOutput } from "./GetTagKeysOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottledException } from "./ThrottledException";
import { InternalServiceException } from "./InternalServiceException";
import { PaginationTokenExpiredException } from "./PaginationTokenExpiredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTagKeys: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTagKeys",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTagKeysInput
  },
  output: {
    shape: GetTagKeysOutput
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
