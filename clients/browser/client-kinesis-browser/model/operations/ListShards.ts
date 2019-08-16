import { ListShardsInput } from "../shapes/ListShardsInput";
import { ListShardsOutput } from "../shapes/ListShardsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ExpiredNextTokenException } from "../shapes/ExpiredNextTokenException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListShards: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListShards",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListShardsInput
  },
  output: {
    shape: ListShardsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ExpiredNextTokenException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
