import { AssociateNodeInput } from "../shapes/AssociateNodeInput";
import { AssociateNodeOutput } from "../shapes/AssociateNodeOutput";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
