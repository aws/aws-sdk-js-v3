import { ListSubscribedWorkteamsInput } from "../shapes/ListSubscribedWorkteamsInput";
import { ListSubscribedWorkteamsOutput } from "../shapes/ListSubscribedWorkteamsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSubscribedWorkteams: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSubscribedWorkteams",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSubscribedWorkteamsInput
  },
  output: {
    shape: ListSubscribedWorkteamsOutput
  },
  errors: []
};
