import { ListStreamConsumersInput } from "../shapes/ListStreamConsumersInput";
import { ListStreamConsumersOutput } from "../shapes/ListStreamConsumersOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ExpiredNextTokenException } from "../shapes/ExpiredNextTokenException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListStreamConsumers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStreamConsumers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListStreamConsumersInput
  },
  output: {
    shape: ListStreamConsumersOutput
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
