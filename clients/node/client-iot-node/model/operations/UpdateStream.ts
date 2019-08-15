import { UpdateStreamInput } from "../shapes/UpdateStreamInput";
import { UpdateStreamOutput } from "../shapes/UpdateStreamOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
