import { _ProfileDataList } from "./_ProfileDataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchProfilesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Profiles: {
      shape: _ProfileDataList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TotalCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
