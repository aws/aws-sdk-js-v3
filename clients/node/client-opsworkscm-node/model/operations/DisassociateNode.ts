import { DisassociateNodeInput } from "../shapes/DisassociateNodeInput";
import { DisassociateNodeOutput } from "../shapes/DisassociateNodeOutput";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateNode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateNode",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateNodeInput
  },
  output: {
    shape: DisassociateNodeOutput
  },
  errors: [
    {
      shape: InvalidStateException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
