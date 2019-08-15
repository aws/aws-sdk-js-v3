import { _instanceProfileListType } from "./_instanceProfileListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInstanceProfilesForRoleOutput: _Structure_ = {
  type: "structure",
  required: ["InstanceProfiles"],
  members: {
    InstanceProfiles: {
      shape: _instanceProfileListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
