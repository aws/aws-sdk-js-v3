import { AssociateFleetInput } from "../shapes/AssociateFleetInput";
import { AssociateFleetOutput } from "../shapes/AssociateFleetOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { IncompatibleImageException } from "../shapes/IncompatibleImageException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateFleetInput
  },
  output: {
    shape: AssociateFleetOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccountStatusException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: IncompatibleImageException
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
