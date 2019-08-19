import { DeleteChapCredentialsInput } from "../shapes/DeleteChapCredentialsInput";
import { DeleteChapCredentialsOutput } from "../shapes/DeleteChapCredentialsOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteChapCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteChapCredentials",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteChapCredentialsInput
  },
  output: {
    shape: DeleteChapCredentialsOutput
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
