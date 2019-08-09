import { _SpotPriceHistoryList } from "./_SpotPriceHistoryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSpotPriceHistoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    SpotPriceHistory: {
      shape: _SpotPriceHistoryList,
      locationName: "spotPriceHistorySet"
    }
  }
};
