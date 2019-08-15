import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMountTargetSecurityGroupsInput: _Structure_ = {
  type: "structure",
  required: ["MountTargetId"],
  members: {
    MountTargetId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "MountTargetId"
    }
  }
};
