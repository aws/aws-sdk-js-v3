import { UpdateItemInput } from "./UpdateItemInput";
import { UpdateItemOutput } from "./UpdateItemOutput";
import { ConditionalCheckFailedException } from "./ConditionalCheckFailedException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ItemCollectionSizeLimitExceededException } from "./ItemCollectionSizeLimitExceededException";
import { TransactionConflictException } from "./TransactionConflictException";
import { RequestLimitExceeded } from "./RequestLimitExceeded";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateItem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateItem",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateItemInput
  },
  output: {
    shape: UpdateItemOutput
  },
  errors: [
    {
      shape: ConditionalCheckFailedException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ItemCollectionSizeLimitExceededException
    },
    {
      shape: TransactionConflictException
    },
    {
      shape: RequestLimitExceeded
    },
    {
      shape: InternalServerError
    }
  ]
};
