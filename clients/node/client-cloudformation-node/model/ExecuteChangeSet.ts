import { ExecuteChangeSetInput } from "./ExecuteChangeSetInput";
import { ExecuteChangeSetOutput } from "./ExecuteChangeSetOutput";
import { InvalidChangeSetStatusException } from "./InvalidChangeSetStatusException";
import { ChangeSetNotFoundException } from "./ChangeSetNotFoundException";
import { InsufficientCapabilitiesException } from "./InsufficientCapabilitiesException";
import { TokenAlreadyExistsException } from "./TokenAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
