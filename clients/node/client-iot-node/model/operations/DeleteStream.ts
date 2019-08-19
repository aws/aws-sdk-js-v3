import { DeleteStreamInput } from "../shapes/DeleteStreamInput";
import { DeleteStreamOutput } from "../shapes/DeleteStreamOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
