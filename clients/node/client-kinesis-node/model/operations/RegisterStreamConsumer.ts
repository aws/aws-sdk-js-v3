import { RegisterStreamConsumerInput } from "../shapes/RegisterStreamConsumerInput";
import { RegisterStreamConsumerOutput } from "../shapes/RegisterStreamConsumerOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterStreamConsumer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterStreamConsumer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterStreamConsumerInput
  },
  output: {
    shape: RegisterStreamConsumerOutput
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
