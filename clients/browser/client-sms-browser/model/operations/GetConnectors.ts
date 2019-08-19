import { GetConnectorsInput } from "../shapes/GetConnectorsInput";
import { GetConnectorsOutput } from "../shapes/GetConnectorsOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
