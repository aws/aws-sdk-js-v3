import { _ServiceActionSummaries } from "./_ServiceActionSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServiceActionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceActionSummaries: {
      shape: _ServiceActionSummaries
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
