import { _NetworkProfileDataList } from "./_NetworkProfileDataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchNetworkProfilesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkProfiles: {
      shape: _NetworkProfileDataList
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
