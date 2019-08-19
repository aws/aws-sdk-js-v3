import { UnassignPrivateIpAddressesInput } from "../shapes/UnassignPrivateIpAddressesInput";
import { UnassignPrivateIpAddressesOutput } from "../shapes/UnassignPrivateIpAddressesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UnassignPrivateIpAddresses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UnassignPrivateIpAddresses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UnassignPrivateIpAddressesInput
  },
  output: {
    shape: UnassignPrivateIpAddressesOutput
  },
  errors: []
};
