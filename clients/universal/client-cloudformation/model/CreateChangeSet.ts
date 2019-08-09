import { CreateChangeSetInput } from "./CreateChangeSetInput";
import { CreateChangeSetOutput } from "./CreateChangeSetOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { InsufficientCapabilitiesException } from "./InsufficientCapabilitiesException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateChangeSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateChangeSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateChangeSetInput
  },
  output: {
    shape: CreateChangeSetOutput,
    resultWrapper: "CreateChangeSetResult"
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: InsufficientCapabilitiesException
    },
    {
      shape: LimitExceededException
    }
  ]
};
