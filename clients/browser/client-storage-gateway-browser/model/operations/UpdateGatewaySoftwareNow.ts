import { UpdateGatewaySoftwareNowInput } from "../shapes/UpdateGatewaySoftwareNowInput";
import { UpdateGatewaySoftwareNowOutput } from "../shapes/UpdateGatewaySoftwareNowOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGatewaySoftwareNow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGatewaySoftwareNow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateGatewaySoftwareNowInput
  },
  output: {
    shape: UpdateGatewaySoftwareNowOutput
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
