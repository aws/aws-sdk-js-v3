import { ListUserPoolsInput } from "../shapes/ListUserPoolsInput";
import { ListUserPoolsOutput } from "../shapes/ListUserPoolsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListUserPools: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUserPools",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUserPoolsInput
  },
  output: {
    shape: ListUserPoolsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InternalErrorException
    }
  ]
};
