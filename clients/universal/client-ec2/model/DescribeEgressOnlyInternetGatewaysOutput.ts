import { _EgressOnlyInternetGatewayList } from "./_EgressOnlyInternetGatewayList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEgressOnlyInternetGatewaysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EgressOnlyInternetGateways: {
      shape: _EgressOnlyInternetGatewayList,
      locationName: "egressOnlyInternetGatewaySet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
