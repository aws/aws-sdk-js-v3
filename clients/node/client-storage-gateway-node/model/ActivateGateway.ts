import { ActivateGatewayInput } from "./ActivateGatewayInput";
import { ActivateGatewayOutput } from "./ActivateGatewayOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ActivateGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ActivateGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ActivateGatewayInput
  },
  output: {
    shape: ActivateGatewayOutput
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
