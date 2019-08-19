import { ListDatasetsInput } from "../shapes/ListDatasetsInput";
import { ListDatasetsOutput } from "../shapes/ListDatasetsOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDatasets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDatasets",
  http: {
    method: "GET",
    requestUri:
      "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets"
  },
  input: {
    shape: ListDatasetsInput
  },
  output: {
    shape: ListDatasetsOutput
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
