import { CreateAgentInput } from "./CreateAgentInput";
import { CreateAgentOutput } from "./CreateAgentOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateAgent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAgent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAgentInput
  },
  output: {
    shape: CreateAgentOutput
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
