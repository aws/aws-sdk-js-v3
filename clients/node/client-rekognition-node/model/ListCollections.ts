import { ListCollectionsInput } from "./ListCollectionsInput";
import { ListCollectionsOutput } from "./ListCollectionsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
