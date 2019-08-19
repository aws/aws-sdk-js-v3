import { CreateStackInput } from "../shapes/CreateStackInput";
import { CreateStackOutput } from "../shapes/CreateStackOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { TokenAlreadyExistsException } from "../shapes/TokenAlreadyExistsException";
import { InsufficientCapabilitiesException } from "../shapes/InsufficientCapabilitiesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
