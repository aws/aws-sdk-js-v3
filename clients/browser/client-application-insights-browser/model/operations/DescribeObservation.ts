import { DescribeObservationInput } from "../shapes/DescribeObservationInput";
import { DescribeObservationOutput } from "../shapes/DescribeObservationOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
