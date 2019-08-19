import { ListDeviceDefinitionVersionsInput } from "../shapes/ListDeviceDefinitionVersionsInput";
import { ListDeviceDefinitionVersionsOutput } from "../shapes/ListDeviceDefinitionVersionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDeviceDefinitionVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeviceDefinitionVersions",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/devices/{DeviceDefinitionId}/versions"
  },
  input: {
    shape: ListDeviceDefinitionVersionsInput
  },
  output: {
    shape: ListDeviceDefinitionVersionsOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
