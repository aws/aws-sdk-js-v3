import { UpdateGatewayInformationInput } from "./UpdateGatewayInformationInput";
import { UpdateGatewayInformationOutput } from "./UpdateGatewayInformationOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateGatewayInformation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGatewayInformation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateGatewayInformationInput
  },
  output: {
    shape: UpdateGatewayInformationOutput
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
