import { DeleteAgentInput } from "./DeleteAgentInput";
import { DeleteAgentOutput } from "./DeleteAgentOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAgent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAgent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAgentInput
  },
  output: {
    shape: DeleteAgentOutput
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
