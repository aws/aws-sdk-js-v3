import { _SecurityProfileSummaryList } from "./_SecurityProfileSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSecurityProfilesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecurityProfileSummaryList: {
      shape: _SecurityProfileSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
