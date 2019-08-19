import { UpdateVTLDeviceTypeInput } from "../shapes/UpdateVTLDeviceTypeInput";
import { UpdateVTLDeviceTypeOutput } from "../shapes/UpdateVTLDeviceTypeOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateVTLDeviceType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateVTLDeviceType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateVTLDeviceTypeInput
  },
  output: {
    shape: UpdateVTLDeviceTypeOutput
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
