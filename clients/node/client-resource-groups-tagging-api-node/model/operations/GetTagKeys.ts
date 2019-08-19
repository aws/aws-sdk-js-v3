import { GetTagKeysInput } from "../shapes/GetTagKeysInput";
import { GetTagKeysOutput } from "../shapes/GetTagKeysOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ThrottledException } from "../shapes/ThrottledException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { PaginationTokenExpiredException } from "../shapes/PaginationTokenExpiredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
