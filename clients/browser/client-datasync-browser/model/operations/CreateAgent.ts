import { CreateAgentInput } from "../shapes/CreateAgentInput";
import { CreateAgentOutput } from "../shapes/CreateAgentOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
