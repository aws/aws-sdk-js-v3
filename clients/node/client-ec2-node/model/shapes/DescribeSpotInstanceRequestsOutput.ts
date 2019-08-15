import { _SpotInstanceRequestList } from "./_SpotInstanceRequestList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSpotInstanceRequestsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SpotInstanceRequests: {
      shape: _SpotInstanceRequestList,
      locationName: "spotInstanceRequestSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
