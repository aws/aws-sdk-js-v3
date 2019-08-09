import { CreateDeviceDefinitionInput } from "./CreateDeviceDefinitionInput";
import { CreateDeviceDefinitionOutput } from "./CreateDeviceDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDeviceDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDeviceDefinition",
  http: {
    method: "POST",
    requestUri: "/greengrass/definition/devices"
  },
  input: {
    shape: CreateDeviceDefinitionInput
  },
  output: {
    shape: CreateDeviceDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
