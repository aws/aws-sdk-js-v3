import { DeleteDeviceDefinitionInput } from "../shapes/DeleteDeviceDefinitionInput";
import { DeleteDeviceDefinitionOutput } from "../shapes/DeleteDeviceDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
