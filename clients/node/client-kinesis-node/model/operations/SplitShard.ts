import { SplitShardInput } from "../shapes/SplitShardInput";
import { SplitShardOutput } from "../shapes/SplitShardOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SplitShard: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SplitShard",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SplitShardInput
  },
  output: {
    shape: SplitShardOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    }
  ]
};
