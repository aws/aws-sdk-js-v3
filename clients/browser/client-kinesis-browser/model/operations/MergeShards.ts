import { MergeShardsInput } from "../shapes/MergeShardsInput";
import { MergeShardsOutput } from "../shapes/MergeShardsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const MergeShards: _Operation_ = {
  metadata: ServiceMetadata,
  name: "MergeShards",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: MergeShardsInput
  },
  output: {
    shape: MergeShardsOutput
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
