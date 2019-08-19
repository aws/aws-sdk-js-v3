import { UpdateStackInput } from "../shapes/UpdateStackInput";
import { UpdateStackOutput } from "../shapes/UpdateStackOutput";
import { InsufficientCapabilitiesException } from "../shapes/InsufficientCapabilitiesException";
import { TokenAlreadyExistsException } from "../shapes/TokenAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateStackInput
  },
  output: {
    shape: UpdateStackOutput,
    resultWrapper: "UpdateStackResult"
  },
  errors: [
    {
      shape: InsufficientCapabilitiesException
    },
    {
      shape: TokenAlreadyExistsException
    }
  ]
};
