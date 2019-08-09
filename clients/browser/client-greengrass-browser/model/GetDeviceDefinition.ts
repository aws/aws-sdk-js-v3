import { GetDeviceDefinitionInput } from "./GetDeviceDefinitionInput";
import { GetDeviceDefinitionOutput } from "./GetDeviceDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
