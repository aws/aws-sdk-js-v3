import { DeleteBuildInput } from "../shapes/DeleteBuildInput";
import { DeleteBuildOutput } from "../shapes/DeleteBuildOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBuild: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBuild",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteBuildInput
  },
  output: {
    shape: DeleteBuildOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
