import { ListScriptsInput } from "../shapes/ListScriptsInput";
import { ListScriptsOutput } from "../shapes/ListScriptsOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
