import { UpdateStreamInput } from "./UpdateStreamInput";
import { UpdateStreamOutput } from "./UpdateStreamOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStream",
  http: {
    method: "PUT",
    requestUri: "/streams/{streamId}"
  },
  input: {
    shape: UpdateStreamInput
  },
  output: {
    shape: UpdateStreamOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
