import { DeleteBuildInput } from "./DeleteBuildInput";
import { DeleteBuildOutput } from "./DeleteBuildOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
