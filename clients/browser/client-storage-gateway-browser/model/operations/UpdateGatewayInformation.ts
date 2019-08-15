import { UpdateGatewayInformationInput } from "../shapes/UpdateGatewayInformationInput";
import { UpdateGatewayInformationOutput } from "../shapes/UpdateGatewayInformationOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
