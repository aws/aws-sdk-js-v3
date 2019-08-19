import { ActivateGatewayInput } from "../shapes/ActivateGatewayInput";
import { ActivateGatewayOutput } from "../shapes/ActivateGatewayOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
