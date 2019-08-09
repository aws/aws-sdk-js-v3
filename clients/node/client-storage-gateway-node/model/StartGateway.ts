import { StartGatewayInput } from "./StartGatewayInput";
import { StartGatewayOutput } from "./StartGatewayOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartGatewayInput
  },
  output: {
    shape: StartGatewayOutput
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
