import { DisableGatewayInput } from "./DisableGatewayInput";
import { DisableGatewayOutput } from "./DisableGatewayOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisableGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableGatewayInput
  },
  output: {
    shape: DisableGatewayOutput
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
