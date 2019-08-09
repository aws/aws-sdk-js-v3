import { UpdateStackInput } from "./UpdateStackInput";
import { UpdateStackOutput } from "./UpdateStackOutput";
import { InsufficientCapabilitiesException } from "./InsufficientCapabilitiesException";
import { TokenAlreadyExistsException } from "./TokenAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
