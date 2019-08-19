import { _UserIdentityInfo } from "./_UserIdentityInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserIdentityInfoInput: _Structure_ = {
  type: "structure",
  required: ["IdentityInfo", "UserId", "InstanceId"],
  members: {
    IdentityInfo: {
      shape: _UserIdentityInfo
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
