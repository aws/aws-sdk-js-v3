import { UpdateAgentInput } from "../shapes/UpdateAgentInput";
import { UpdateAgentOutput } from "../shapes/UpdateAgentOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
