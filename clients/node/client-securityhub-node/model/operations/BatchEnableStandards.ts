import { BatchEnableStandardsInput } from "../shapes/BatchEnableStandardsInput";
import { BatchEnableStandardsOutput } from "../shapes/BatchEnableStandardsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchEnableStandards: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchEnableStandards",
  http: {
    method: "POST",
    requestUri: "/standards/register"
  },
  input: {
    shape: BatchEnableStandardsInput
  },
  output: {
    shape: BatchEnableStandardsOutput
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
