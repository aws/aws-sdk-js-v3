import { ListItemsInput } from "../shapes/ListItemsInput";
import { ListItemsOutput } from "../shapes/ListItemsOutput";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
