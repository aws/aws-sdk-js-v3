import { CreateScriptInput } from "./CreateScriptInput";
import { CreateScriptOutput } from "./CreateScriptOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ConflictException } from "./ConflictException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateScript: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateScript",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateScriptInput
  },
  output: {
    shape: CreateScriptOutput
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
