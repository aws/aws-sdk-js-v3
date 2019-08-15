import { UpdateItemInput } from "../shapes/UpdateItemInput";
import { UpdateItemOutput } from "../shapes/UpdateItemOutput";
import { ConditionalCheckFailedException } from "../shapes/ConditionalCheckFailedException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ItemCollectionSizeLimitExceededException } from "../shapes/ItemCollectionSizeLimitExceededException";
import { TransactionConflictException } from "../shapes/TransactionConflictException";
import { RequestLimitExceeded } from "../shapes/RequestLimitExceeded";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
