import { CreateDeviceDefinitionVersionInput } from "../shapes/CreateDeviceDefinitionVersionInput";
import { CreateDeviceDefinitionVersionOutput } from "../shapes/CreateDeviceDefinitionVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDeviceDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDeviceDefinitionVersion",
  http: {
    method: "POST",
    requestUri: "/greengrass/definition/devices/{DeviceDefinitionId}/versions"
  },
  input: {
    shape: CreateDeviceDefinitionVersionInput
  },
  output: {
    shape: CreateDeviceDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
