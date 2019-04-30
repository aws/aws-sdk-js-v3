import { DeregisterStreamConsumerInput } from "./DeregisterStreamConsumerInput";
import { DeregisterStreamConsumerOutput } from "./DeregisterStreamConsumerOutput";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
