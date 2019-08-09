import { CreateBuildInput } from "./CreateBuildInput";
import { CreateBuildOutput } from "./CreateBuildOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ConflictException } from "./ConflictException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateBuild: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBuild",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateBuildInput
  },
  output: {
    shape: CreateBuildOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: InternalServiceException
    }
  ]
};
