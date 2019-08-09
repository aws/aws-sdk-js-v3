import { ListDatasetsInput } from "./ListDatasetsInput";
import { ListDatasetsOutput } from "./ListDatasetsOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
