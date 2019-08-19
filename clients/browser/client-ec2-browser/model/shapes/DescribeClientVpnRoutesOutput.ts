import { _ClientVpnRouteSet } from "./_ClientVpnRouteSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClientVpnRoutesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Routes: {
      shape: _ClientVpnRouteSet,
      locationName: "routes"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
