import { ListVirtualMFADevicesInput } from "./ListVirtualMFADevicesInput";
import { ListVirtualMFADevicesOutput } from "./ListVirtualMFADevicesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListVirtualMFADevices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVirtualMFADevices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListVirtualMFADevicesInput
  },
  output: {
    shape: ListVirtualMFADevicesOutput,
    resultWrapper: "ListVirtualMFADevicesResult"
  },
  errors: []
};
