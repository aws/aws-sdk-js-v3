import { ReserveContactInput } from "./ReserveContactInput";
import { ReserveContactOutput } from "./ReserveContactOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
