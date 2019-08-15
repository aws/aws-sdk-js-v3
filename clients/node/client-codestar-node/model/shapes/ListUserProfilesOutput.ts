import { _UserProfilesList } from "./_UserProfilesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUserProfilesOutput: _Structure_ = {
  type: "structure",
  required: ["userProfiles"],
  members: {
    userProfiles: {
      shape: _UserProfilesList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
