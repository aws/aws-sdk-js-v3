import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserHierarchyInput: _Structure_ = {
  type: "structure",
  required: ["UserId", "InstanceId"],
  members: {
    HierarchyGroupId: {
      shape: {
        type: "string"
      }
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
