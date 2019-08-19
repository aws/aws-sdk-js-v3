import { DeregisterStreamConsumerInput } from "../shapes/DeregisterStreamConsumerInput";
import { DeregisterStreamConsumerOutput } from "../shapes/DeregisterStreamConsumerOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterStreamConsumer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterStreamConsumer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterStreamConsumerInput
  },
  output: {
    shape: DeregisterStreamConsumerOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgumentException
    }
  ]
};
