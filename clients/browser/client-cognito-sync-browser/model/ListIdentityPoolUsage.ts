import { ListIdentityPoolUsageInput } from "./ListIdentityPoolUsageInput";
import { ListIdentityPoolUsageOutput } from "./ListIdentityPoolUsageOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
