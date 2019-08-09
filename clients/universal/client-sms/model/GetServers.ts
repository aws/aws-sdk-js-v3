import { GetServersInput } from "./GetServersInput";
import { GetServersOutput } from "./GetServersOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetServers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetServers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetServersInput
  },
  output: {
    shape: GetServersOutput
  },
  errors: [
    {
      shape: UnauthorizedOperationException
    }
  ]
};
