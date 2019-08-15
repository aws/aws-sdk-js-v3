import { ListBootstrapActionsInput } from "../shapes/ListBootstrapActionsInput";
import { ListBootstrapActionsOutput } from "../shapes/ListBootstrapActionsOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
