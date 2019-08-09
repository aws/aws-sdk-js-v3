import { _ServiceUpdateList } from "./_ServiceUpdateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServiceUpdatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ServiceUpdates: {
      shape: _ServiceUpdateList
    }
  }
};
