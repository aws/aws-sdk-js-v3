import { DisassociateFleetInput } from "./DisassociateFleetInput";
import { DisassociateFleetOutput } from "./DisassociateFleetOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
