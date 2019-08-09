import { ListAgentsInput } from "./ListAgentsInput";
import { ListAgentsOutput } from "./ListAgentsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
