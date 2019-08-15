import { DeleteScriptInput } from "../shapes/DeleteScriptInput";
import { DeleteScriptOutput } from "../shapes/DeleteScriptOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteScript: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteScript",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteScriptInput
  },
  output: {
    shape: DeleteScriptOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
