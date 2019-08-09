import { ListInventoryEntriesInput } from "./ListInventoryEntriesInput";
import { ListInventoryEntriesOutput } from "./ListInventoryEntriesOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidTypeNameException } from "./InvalidTypeNameException";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
