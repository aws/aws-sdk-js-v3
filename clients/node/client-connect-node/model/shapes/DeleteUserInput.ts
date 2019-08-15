import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUserInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "UserId"],
  members: {
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "InstanceId"
    },
    UserId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "UserId"
    }
  }
};
