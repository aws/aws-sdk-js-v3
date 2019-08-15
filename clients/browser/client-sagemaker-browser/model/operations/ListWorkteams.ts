import { ListWorkteamsInput } from "../shapes/ListWorkteamsInput";
import { ListWorkteamsOutput } from "../shapes/ListWorkteamsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListWorkteams: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListWorkteams",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListWorkteamsInput
  },
  output: {
    shape: ListWorkteamsOutput
  },
  errors: []
};
