import { UpdateScriptInput } from "./UpdateScriptInput";
import { UpdateScriptOutput } from "./UpdateScriptOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
