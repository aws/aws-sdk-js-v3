import { StartFleetInput } from "../shapes/StartFleetInput";
import { StartFleetOutput } from "../shapes/StartFleetOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
