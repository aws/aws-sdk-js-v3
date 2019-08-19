import { GetDeviceDefinitionVersionInput } from "../shapes/GetDeviceDefinitionVersionInput";
import { GetDeviceDefinitionVersionOutput } from "../shapes/GetDeviceDefinitionVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDeviceDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeviceDefinitionVersion",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}"
  },
  input: {
    shape: GetDeviceDefinitionVersionInput
  },
  output: {
    shape: GetDeviceDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
