import { DescribeAvailabilityOptionsInput } from "../shapes/DescribeAvailabilityOptionsInput";
import { DescribeAvailabilityOptionsOutput } from "../shapes/DescribeAvailabilityOptionsOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { DisabledOperationException } from "../shapes/DisabledOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAvailabilityOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAvailabilityOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAvailabilityOptionsInput
  },
  output: {
    shape: DescribeAvailabilityOptionsOutput,
    resultWrapper: "DescribeAvailabilityOptionsResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: InvalidTypeException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: DisabledOperationException
    }
  ]
};
