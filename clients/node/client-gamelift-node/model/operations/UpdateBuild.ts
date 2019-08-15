import { UpdateBuildInput } from "../shapes/UpdateBuildInput";
import { UpdateBuildOutput } from "../shapes/UpdateBuildOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBuild: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBuild",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateBuildInput
  },
  output: {
    shape: UpdateBuildOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
