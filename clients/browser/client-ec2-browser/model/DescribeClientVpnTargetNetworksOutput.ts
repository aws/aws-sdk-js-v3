import { _TargetNetworkSet } from "./_TargetNetworkSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClientVpnTargetNetworksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientVpnTargetNetworks: {
      shape: _TargetNetworkSet,
      locationName: "clientVpnTargetNetworks"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
