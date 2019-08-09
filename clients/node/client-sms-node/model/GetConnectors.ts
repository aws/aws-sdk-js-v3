import { GetConnectorsInput } from "./GetConnectorsInput";
import { GetConnectorsOutput } from "./GetConnectorsOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetConnectors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConnectors",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetConnectorsInput
  },
  output: {
    shape: GetConnectorsOutput
  },
  errors: [
    {
      shape: UnauthorizedOperationException
    }
  ]
};
