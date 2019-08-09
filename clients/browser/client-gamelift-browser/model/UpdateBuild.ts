import { UpdateBuildInput } from "./UpdateBuildInput";
import { UpdateBuildOutput } from "./UpdateBuildOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
