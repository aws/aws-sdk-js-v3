import { _RoutingProfileSummaryList } from "./_RoutingProfileSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRoutingProfilesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RoutingProfileSummaryList: {
      shape: _RoutingProfileSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
