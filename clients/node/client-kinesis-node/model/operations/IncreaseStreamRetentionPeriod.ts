import { IncreaseStreamRetentionPeriodInput } from "../shapes/IncreaseStreamRetentionPeriodInput";
import { IncreaseStreamRetentionPeriodOutput } from "../shapes/IncreaseStreamRetentionPeriodOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const IncreaseStreamRetentionPeriod: _Operation_ = {
  metadata: ServiceMetadata,
  name: "IncreaseStreamRetentionPeriod",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: IncreaseStreamRetentionPeriodInput
  },
  output: {
    shape: IncreaseStreamRetentionPeriodOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidArgumentException
    }
  ]
};
