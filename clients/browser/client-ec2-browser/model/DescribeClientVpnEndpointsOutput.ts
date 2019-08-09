import { _EndpointSet } from "./_EndpointSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClientVpnEndpointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientVpnEndpoints: {
      shape: _EndpointSet,
      locationName: "clientVpnEndpoint"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
