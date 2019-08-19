import { DecreaseStreamRetentionPeriodInput } from "../shapes/DecreaseStreamRetentionPeriodInput";
import { DecreaseStreamRetentionPeriodOutput } from "../shapes/DecreaseStreamRetentionPeriodOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DecreaseStreamRetentionPeriod: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DecreaseStreamRetentionPeriod",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DecreaseStreamRetentionPeriodInput
  },
  output: {
    shape: DecreaseStreamRetentionPeriodOutput
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
