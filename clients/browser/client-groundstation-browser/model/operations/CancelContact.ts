import { CancelContactInput } from "../shapes/CancelContactInput";
import { CancelContactOutput } from "../shapes/CancelContactOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelContact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelContact",
  http: {
    method: "DELETE",
    requestUri: "/contact/{contactId}"
  },
  input: {
    shape: CancelContactInput
  },
  output: {
    shape: CancelContactOutput
  },
  errors: [
    {
      shape: DependencyException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
