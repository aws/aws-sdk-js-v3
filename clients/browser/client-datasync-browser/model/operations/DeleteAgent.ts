import { DeleteAgentInput } from "../shapes/DeleteAgentInput";
import { DeleteAgentOutput } from "../shapes/DeleteAgentOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
