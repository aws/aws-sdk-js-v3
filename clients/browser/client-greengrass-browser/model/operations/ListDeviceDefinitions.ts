import { ListDeviceDefinitionsInput } from "../shapes/ListDeviceDefinitionsInput";
import { ListDeviceDefinitionsOutput } from "../shapes/ListDeviceDefinitionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDeviceDefinitions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeviceDefinitions",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/devices"
  },
  input: {
    shape: ListDeviceDefinitionsInput
  },
  output: {
    shape: ListDeviceDefinitionsOutput
  },
  errors: []
};
