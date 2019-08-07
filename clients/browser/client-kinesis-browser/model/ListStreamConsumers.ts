import { ListStreamConsumersInput } from "./ListStreamConsumersInput";
import { ListStreamConsumersOutput } from "./ListStreamConsumersOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ExpiredNextTokenException } from "./ExpiredNextTokenException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
