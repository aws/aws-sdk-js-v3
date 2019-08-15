import { ListRecordsInput } from "../shapes/ListRecordsInput";
import { ListRecordsOutput } from "../shapes/ListRecordsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRecords: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRecords",
  http: {
    method: "GET",
    requestUri:
      "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records"
  },
  input: {
    shape: ListRecordsInput
  },
  output: {
    shape: ListRecordsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    }
  ]
};
