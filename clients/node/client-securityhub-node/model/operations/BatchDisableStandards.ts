import { BatchDisableStandardsInput } from "../shapes/BatchDisableStandardsInput";
import { BatchDisableStandardsOutput } from "../shapes/BatchDisableStandardsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDisableStandards: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDisableStandards",
  http: {
    method: "POST",
    requestUri: "/standards/deregister"
  },
  input: {
    shape: BatchDisableStandardsInput
  },
  output: {
    shape: BatchDisableStandardsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: LimitExceededException
    }
  ]
};
