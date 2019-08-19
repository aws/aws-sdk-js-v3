import { ListInventoryEntriesInput } from "../shapes/ListInventoryEntriesInput";
import { ListInventoryEntriesOutput } from "../shapes/ListInventoryEntriesOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InvalidTypeNameException } from "../shapes/InvalidTypeNameException";
import { InvalidFilter } from "../shapes/InvalidFilter";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListInventoryEntries: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInventoryEntries",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListInventoryEntriesInput
  },
  output: {
    shape: ListInventoryEntriesOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidInstanceId
    },
    {
      shape: InvalidTypeNameException
    },
    {
      shape: InvalidFilter
    },
    {
      shape: InvalidNextToken
    }
  ]
};
