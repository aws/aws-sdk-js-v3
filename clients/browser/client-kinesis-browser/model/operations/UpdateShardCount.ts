import { UpdateShardCountInput } from "../shapes/UpdateShardCountInput";
import { UpdateShardCountOutput } from "../shapes/UpdateShardCountOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateShardCount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateShardCount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateShardCountInput
  },
  output: {
    shape: UpdateShardCountOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
