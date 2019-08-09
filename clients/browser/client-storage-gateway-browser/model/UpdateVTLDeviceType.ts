import { UpdateVTLDeviceTypeInput } from "./UpdateVTLDeviceTypeInput";
import { UpdateVTLDeviceTypeOutput } from "./UpdateVTLDeviceTypeOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
