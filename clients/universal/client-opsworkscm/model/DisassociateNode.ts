import { DisassociateNodeInput } from "./DisassociateNodeInput";
import { DisassociateNodeOutput } from "./DisassociateNodeOutput";
import { InvalidStateException } from "./InvalidStateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
