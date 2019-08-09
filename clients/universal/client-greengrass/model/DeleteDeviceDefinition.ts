import { DeleteDeviceDefinitionInput } from "./DeleteDeviceDefinitionInput";
import { DeleteDeviceDefinitionOutput } from "./DeleteDeviceDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDeviceDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDeviceDefinition",
  http: {
    method: "DELETE",
    requestUri: "/greengrass/definition/devices/{DeviceDefinitionId}"
  },
  input: {
    shape: DeleteDeviceDefinitionInput
  },
  output: {
    shape: DeleteDeviceDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
