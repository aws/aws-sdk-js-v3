import { ListItemsInput } from "./ListItemsInput";
import { ListItemsOutput } from "./ListItemsOutput";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListItems: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListItems",
  http: {
    method: "GET",
    requestUri: "/"
  },
  input: {
    shape: ListItemsInput
  },
  output: {
    shape: ListItemsOutput
  },
  errors: [
    {
      shape: ContainerNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
