import { DescribeObservationInput } from "./DescribeObservationInput";
import { DescribeObservationOutput } from "./DescribeObservationOutput";
import { InternalServerException } from "./InternalServerException";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeObservation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeObservation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeObservationInput
  },
  output: {
    shape: DescribeObservationOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
