import { GetBulkPublishDetailsInput } from "../shapes/GetBulkPublishDetailsInput";
import { GetBulkPublishDetailsOutput } from "../shapes/GetBulkPublishDetailsOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
