import { CreateScriptInput } from "../shapes/CreateScriptInput";
import { CreateScriptOutput } from "../shapes/CreateScriptOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
