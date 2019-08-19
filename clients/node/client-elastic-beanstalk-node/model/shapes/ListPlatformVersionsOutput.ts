import { _PlatformSummaryList } from "./_PlatformSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPlatformVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlatformSummaryList: {
      shape: _PlatformSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
