import { ShutdownGatewayInput } from "../shapes/ShutdownGatewayInput";
import { ShutdownGatewayOutput } from "../shapes/ShutdownGatewayOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ShutdownGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ShutdownGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ShutdownGatewayInput
  },
  output: {
    shape: ShutdownGatewayOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
