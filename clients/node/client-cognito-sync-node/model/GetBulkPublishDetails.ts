import { GetBulkPublishDetailsInput } from "./GetBulkPublishDetailsInput";
import { GetBulkPublishDetailsOutput } from "./GetBulkPublishDetailsOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBulkPublishDetails: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBulkPublishDetails",
  http: {
    method: "POST",
    requestUri: "/identitypools/{IdentityPoolId}/getBulkPublishDetails"
  },
  input: {
    shape: GetBulkPublishDetailsInput
  },
  output: {
    shape: GetBulkPublishDetailsOutput
  },
  errors: [
    {
      shape: NotAuthorizedException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
