import { BulkPublishInput } from "../shapes/BulkPublishInput";
import { BulkPublishOutput } from "../shapes/BulkPublishOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { DuplicateRequestException } from "../shapes/DuplicateRequestException";
import { AlreadyStreamedException } from "../shapes/AlreadyStreamedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BulkPublish: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BulkPublish",
  http: {
    method: "POST",
    requestUri: "/identitypools/{IdentityPoolId}/bulkpublish"
  },
  input: {
    shape: BulkPublishInput
  },
  output: {
    shape: BulkPublishOutput
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
    },
    {
      shape: DuplicateRequestException
    },
    {
      shape: AlreadyStreamedException
    }
  ]
};
