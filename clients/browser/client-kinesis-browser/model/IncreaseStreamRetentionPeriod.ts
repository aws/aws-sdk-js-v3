import { IncreaseStreamRetentionPeriodInput } from "./IncreaseStreamRetentionPeriodInput";
import { IncreaseStreamRetentionPeriodOutput } from "./IncreaseStreamRetentionPeriodOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
