import { SearchDevicesInput } from "../shapes/SearchDevicesInput";
import { SearchDevicesOutput } from "../shapes/SearchDevicesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchDevices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchDevices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchDevicesInput
  },
  output: {
    shape: SearchDevicesOutput
  },
  errors: []
};
