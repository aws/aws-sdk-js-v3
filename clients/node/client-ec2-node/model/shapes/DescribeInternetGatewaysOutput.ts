import { _InternetGatewayList } from "./_InternetGatewayList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInternetGatewaysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InternetGateways: {
      shape: _InternetGatewayList,
      locationName: "internetGatewaySet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
