import { BulkPublishInput } from "./BulkPublishInput";
import { BulkPublishOutput } from "./BulkPublishOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { DuplicateRequestException } from "./DuplicateRequestException";
import { AlreadyStreamedException } from "./AlreadyStreamedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
