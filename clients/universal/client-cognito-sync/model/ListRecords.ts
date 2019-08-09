import { ListRecordsInput } from "./ListRecordsInput";
import { ListRecordsOutput } from "./ListRecordsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
