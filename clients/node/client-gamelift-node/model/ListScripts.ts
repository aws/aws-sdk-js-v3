import { ListScriptsInput } from "./ListScriptsInput";
import { ListScriptsOutput } from "./ListScriptsOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListScripts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListScripts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListScriptsInput
  },
  output: {
    shape: ListScriptsOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalServiceException
    }
  ]
};
