import { AssignIpv6AddressesInput } from "./AssignIpv6AddressesInput";
import { AssignIpv6AddressesOutput } from "./AssignIpv6AddressesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssignIpv6Addresses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssignIpv6Addresses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssignIpv6AddressesInput
  },
  output: {
    shape: AssignIpv6AddressesOutput
  },
  errors: []
};
