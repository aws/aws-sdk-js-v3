import { UnassignIpv6AddressesInput } from "../shapes/UnassignIpv6AddressesInput";
import { UnassignIpv6AddressesOutput } from "../shapes/UnassignIpv6AddressesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UnassignIpv6Addresses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UnassignIpv6Addresses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UnassignIpv6AddressesInput
  },
  output: {
    shape: UnassignIpv6AddressesOutput
  },
  errors: []
};
