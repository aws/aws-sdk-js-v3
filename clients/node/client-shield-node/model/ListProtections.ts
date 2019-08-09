import { ListProtectionsInput } from "./ListProtectionsInput";
import { ListProtectionsOutput } from "./ListProtectionsOutput";
import { InternalErrorException } from "./InternalErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListProtections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProtections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListProtectionsInput
  },
  output: {
    shape: ListProtectionsOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidPaginationTokenException
    }
  ]
};
