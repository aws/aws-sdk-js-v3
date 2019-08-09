import { AssociateFleetInput } from "./AssociateFleetInput";
import { AssociateFleetOutput } from "./AssociateFleetOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { IncompatibleImageException } from "./IncompatibleImageException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
