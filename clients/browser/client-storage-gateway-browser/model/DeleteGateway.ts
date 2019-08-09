import { DeleteGatewayInput } from "./DeleteGatewayInput";
import { DeleteGatewayOutput } from "./DeleteGatewayOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
