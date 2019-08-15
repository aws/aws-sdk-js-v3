import { UpdateScriptInput } from "../shapes/UpdateScriptInput";
import { UpdateScriptOutput } from "../shapes/UpdateScriptOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateScript: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateScript",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateScriptInput
  },
  output: {
    shape: UpdateScriptOutput
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
