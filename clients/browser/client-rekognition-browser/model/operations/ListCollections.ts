import { ListCollectionsInput } from "../shapes/ListCollectionsInput";
import { ListCollectionsOutput } from "../shapes/ListCollectionsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCollections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCollections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCollectionsInput
  },
  output: {
    shape: ListCollectionsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: InvalidPaginationTokenException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
