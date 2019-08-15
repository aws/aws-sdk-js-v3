import { ExecuteChangeSetInput } from "../shapes/ExecuteChangeSetInput";
import { ExecuteChangeSetOutput } from "../shapes/ExecuteChangeSetOutput";
import { InvalidChangeSetStatusException } from "../shapes/InvalidChangeSetStatusException";
import { ChangeSetNotFoundException } from "../shapes/ChangeSetNotFoundException";
import { InsufficientCapabilitiesException } from "../shapes/InsufficientCapabilitiesException";
import { TokenAlreadyExistsException } from "../shapes/TokenAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ExecuteChangeSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExecuteChangeSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ExecuteChangeSetInput
  },
  output: {
    shape: ExecuteChangeSetOutput,
    resultWrapper: "ExecuteChangeSetResult"
  },
  errors: [
    {
      shape: InvalidChangeSetStatusException
    },
    {
      shape: ChangeSetNotFoundException
    },
    {
      shape: InsufficientCapabilitiesException
    },
    {
      shape: TokenAlreadyExistsException
    }
  ]
};
