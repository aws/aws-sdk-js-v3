import { _SelfUserProfile } from "./_SelfUserProfile";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMyUserProfileOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserProfile: {
      shape: _SelfUserProfile
    }
  }
};
