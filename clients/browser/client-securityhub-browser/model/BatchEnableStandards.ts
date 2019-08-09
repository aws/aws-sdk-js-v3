import { BatchEnableStandardsInput } from "./BatchEnableStandardsInput";
import { BatchEnableStandardsOutput } from "./BatchEnableStandardsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
