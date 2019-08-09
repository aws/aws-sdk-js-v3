import { BatchDisableStandardsInput } from "./BatchDisableStandardsInput";
import { BatchDisableStandardsOutput } from "./BatchDisableStandardsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
