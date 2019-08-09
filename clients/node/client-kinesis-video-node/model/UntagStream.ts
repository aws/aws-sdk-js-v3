import { UntagStreamInput } from "./UntagStreamInput";
import { UntagStreamOutput } from "./UntagStreamOutput";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidResourceFormatException } from "./InvalidResourceFormatException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
