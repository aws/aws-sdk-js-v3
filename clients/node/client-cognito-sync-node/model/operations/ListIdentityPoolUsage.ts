import { ListIdentityPoolUsageInput } from "../shapes/ListIdentityPoolUsageInput";
import { ListIdentityPoolUsageOutput } from "../shapes/ListIdentityPoolUsageOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListIdentityPoolUsage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListIdentityPoolUsage",
  http: {
    method: "GET",
    requestUri: "/identitypools"
  },
  input: {
    shape: ListIdentityPoolUsageInput
  },
  output: {
    shape: ListIdentityPoolUsageOutput
  },
  errors: [
    {
      shape: NotAuthorizedException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
