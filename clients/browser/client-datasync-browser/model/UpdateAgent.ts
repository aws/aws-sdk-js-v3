import { UpdateAgentInput } from "./UpdateAgentInput";
import { UpdateAgentOutput } from "./UpdateAgentOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateAgent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAgent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAgentInput
  },
  output: {
    shape: UpdateAgentOutput
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
