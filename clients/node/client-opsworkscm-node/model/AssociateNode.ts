import { AssociateNodeInput } from "./AssociateNodeInput";
import { AssociateNodeOutput } from "./AssociateNodeOutput";
import { InvalidStateException } from "./InvalidStateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateNode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateNode",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateNodeInput
  },
  output: {
    shape: AssociateNodeOutput
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
