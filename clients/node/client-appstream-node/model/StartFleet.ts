import { StartFleetInput } from "./StartFleetInput";
import { StartFleetOutput } from "./StartFleetOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartFleetInput
  },
  output: {
    shape: StartFleetOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccountStatusException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
