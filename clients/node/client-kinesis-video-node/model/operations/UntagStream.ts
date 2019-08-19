import { UntagStreamInput } from "../shapes/UntagStreamInput";
import { UntagStreamOutput } from "../shapes/UntagStreamOutput";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidResourceFormatException } from "../shapes/InvalidResourceFormatException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagStream",
  http: {
    method: "POST",
    requestUri: "/untagStream"
  },
  input: {
    shape: UntagStreamInput
  },
  output: {
    shape: UntagStreamOutput
  },
  errors: [
    {
      shape: ClientLimitExceededException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InvalidResourceFormatException
    }
  ]
};
