import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserHierarchyGroupInput: _Structure_ = {
  type: "structure",
  required: ["HierarchyGroupId", "InstanceId"],
  members: {
    HierarchyGroupId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "HierarchyGroupId"
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
