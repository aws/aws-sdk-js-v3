import { CreateStackInput } from "./CreateStackInput";
import { CreateStackOutput } from "./CreateStackOutput";
import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { TokenAlreadyExistsException } from "./TokenAlreadyExistsException";
import { InsufficientCapabilitiesException } from "./InsufficientCapabilitiesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateStackInput
  },
  output: {
    shape: CreateStackOutput,
    resultWrapper: "CreateStackResult"
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: AlreadyExistsException
    },
    {
      shape: TokenAlreadyExistsException
    },
    {
      shape: InsufficientCapabilitiesException
    }
  ]
};
