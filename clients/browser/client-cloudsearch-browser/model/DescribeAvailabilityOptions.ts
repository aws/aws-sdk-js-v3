import { DescribeAvailabilityOptionsInput } from "./DescribeAvailabilityOptionsInput";
import { DescribeAvailabilityOptionsOutput } from "./DescribeAvailabilityOptionsOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { InvalidTypeException } from "./InvalidTypeException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DisabledOperationException } from "./DisabledOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
