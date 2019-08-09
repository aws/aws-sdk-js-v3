import { ListBootstrapActionsInput } from "./ListBootstrapActionsInput";
import { ListBootstrapActionsOutput } from "./ListBootstrapActionsOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListBootstrapActions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBootstrapActions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListBootstrapActionsInput
  },
  output: {
    shape: ListBootstrapActionsOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
