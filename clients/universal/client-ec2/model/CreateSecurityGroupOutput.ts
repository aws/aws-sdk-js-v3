import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSecurityGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupId: {
      shape: {
        type: "string"
      },
      locationName: "groupId"
    }
  }
};
