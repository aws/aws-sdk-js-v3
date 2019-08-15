import { AssignPrivateIpAddressesInput } from "../shapes/AssignPrivateIpAddressesInput";
import { AssignPrivateIpAddressesOutput } from "../shapes/AssignPrivateIpAddressesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssignPrivateIpAddresses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssignPrivateIpAddresses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssignPrivateIpAddressesInput
  },
  output: {
    shape: AssignPrivateIpAddressesOutput
  },
  errors: []
};
