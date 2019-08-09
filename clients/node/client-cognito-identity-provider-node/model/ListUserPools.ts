import { ListUserPoolsInput } from "./ListUserPoolsInput";
import { ListUserPoolsOutput } from "./ListUserPoolsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
