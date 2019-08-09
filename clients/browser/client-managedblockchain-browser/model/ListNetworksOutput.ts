import { _NetworkSummaryList } from "./_NetworkSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListNetworksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Networks: {
      shape: _NetworkSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
