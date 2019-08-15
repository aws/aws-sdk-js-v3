import { ListProtectionsInput } from "../shapes/ListProtectionsInput";
import { ListProtectionsOutput } from "../shapes/ListProtectionsOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
