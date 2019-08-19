import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteInputSecurityGroupInput: _Structure_ = {
  type: "structure",
  required: ["InputSecurityGroupId"],
  members: {
    InputSecurityGroupId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "inputSecurityGroupId"
    }
  }
};
