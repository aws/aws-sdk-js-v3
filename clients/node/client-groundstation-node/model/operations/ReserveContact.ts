import { ReserveContactInput } from "../shapes/ReserveContactInput";
import { ReserveContactOutput } from "../shapes/ReserveContactOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReserveContact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReserveContact",
  http: {
    method: "POST",
    requestUri: "/contact"
  },
  input: {
    shape: ReserveContactInput
  },
  output: {
    shape: ReserveContactOutput
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
