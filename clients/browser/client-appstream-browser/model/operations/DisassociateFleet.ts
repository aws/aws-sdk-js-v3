import { DisassociateFleetInput } from "../shapes/DisassociateFleetInput";
import { DisassociateFleetOutput } from "../shapes/DisassociateFleetOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateFleetInput
  },
  output: {
    shape: DisassociateFleetOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
