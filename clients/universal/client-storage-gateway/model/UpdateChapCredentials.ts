import { UpdateChapCredentialsInput } from "./UpdateChapCredentialsInput";
import { UpdateChapCredentialsOutput } from "./UpdateChapCredentialsOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateChapCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateChapCredentials",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateChapCredentialsInput
  },
  output: {
    shape: UpdateChapCredentialsOutput
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
