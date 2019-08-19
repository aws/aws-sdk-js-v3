import { CreateBuildInput } from "../shapes/CreateBuildInput";
import { CreateBuildOutput } from "../shapes/CreateBuildOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
