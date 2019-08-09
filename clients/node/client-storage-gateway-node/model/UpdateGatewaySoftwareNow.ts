import { UpdateGatewaySoftwareNowInput } from "./UpdateGatewaySoftwareNowInput";
import { UpdateGatewaySoftwareNowOutput } from "./UpdateGatewaySoftwareNowOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
