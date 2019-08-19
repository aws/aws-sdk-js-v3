import { GetDeviceDefinitionInput } from "../shapes/GetDeviceDefinitionInput";
import { GetDeviceDefinitionOutput } from "../shapes/GetDeviceDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDeviceDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeviceDefinition",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/devices/{DeviceDefinitionId}"
  },
  input: {
    shape: GetDeviceDefinitionInput
  },
  output: {
    shape: GetDeviceDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
