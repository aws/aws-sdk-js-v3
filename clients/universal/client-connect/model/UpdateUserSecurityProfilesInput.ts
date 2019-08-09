import { _SecurityProfileIds } from "./_SecurityProfileIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserSecurityProfilesInput: _Structure_ = {
  type: "structure",
  required: ["SecurityProfileIds", "UserId", "InstanceId"],
  members: {
    SecurityProfileIds: {
      shape: _SecurityProfileIds
    },
    UserId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "UserId"
    },
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "InstanceId"
    }
  }
};
