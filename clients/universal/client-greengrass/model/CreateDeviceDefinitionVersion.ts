import { CreateDeviceDefinitionVersionInput } from "./CreateDeviceDefinitionVersionInput";
import { CreateDeviceDefinitionVersionOutput } from "./CreateDeviceDefinitionVersionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
