import { _UserProfiles } from "./_UserProfiles";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserProfilesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserProfiles: {
      shape: _UserProfiles
    }
  }
};
