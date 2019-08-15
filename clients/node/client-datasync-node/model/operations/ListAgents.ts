import { ListAgentsInput } from "../shapes/ListAgentsInput";
import { ListAgentsOutput } from "../shapes/ListAgentsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAgents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAgents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAgentsInput
  },
  output: {
    shape: ListAgentsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};
