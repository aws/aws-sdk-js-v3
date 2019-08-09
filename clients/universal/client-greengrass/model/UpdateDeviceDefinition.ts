import { UpdateDeviceDefinitionInput } from "./UpdateDeviceDefinitionInput";
import { UpdateDeviceDefinitionOutput } from "./UpdateDeviceDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateDeviceDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDeviceDefinition",
  http: {
    method: "PUT",
    requestUri: "/greengrass/definition/devices/{DeviceDefinitionId}"
  },
  input: {
    shape: UpdateDeviceDefinitionInput
  },
  output: {
    shape: UpdateDeviceDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
