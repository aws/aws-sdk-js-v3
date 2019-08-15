import { GetServersInput } from "../shapes/GetServersInput";
import { GetServersOutput } from "../shapes/GetServersOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
