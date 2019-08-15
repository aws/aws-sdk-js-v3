import { CreateChangeSetInput } from "../shapes/CreateChangeSetInput";
import { CreateChangeSetOutput } from "../shapes/CreateChangeSetOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { InsufficientCapabilitiesException } from "../shapes/InsufficientCapabilitiesException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
