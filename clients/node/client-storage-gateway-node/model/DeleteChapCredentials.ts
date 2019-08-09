import { DeleteChapCredentialsInput } from "./DeleteChapCredentialsInput";
import { DeleteChapCredentialsOutput } from "./DeleteChapCredentialsOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
