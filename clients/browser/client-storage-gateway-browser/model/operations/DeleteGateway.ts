import { DeleteGatewayInput } from "../shapes/DeleteGatewayInput";
import { DeleteGatewayOutput } from "../shapes/DeleteGatewayOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteGatewayInput
  },
  output: {
    shape: DeleteGatewayOutput
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
