import { DeleteStreamInput } from "./DeleteStreamInput";
import { DeleteStreamOutput } from "./DeleteStreamOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DeleteConflictException } from "./DeleteConflictException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStream",
  http: {
    method: "DELETE",
    requestUri: "/streams/{streamId}"
  },
  input: {
    shape: DeleteStreamInput
  },
  output: {
    shape: DeleteStreamOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: DeleteConflictException
    },
    {
      shape: InvalidRequestException
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
