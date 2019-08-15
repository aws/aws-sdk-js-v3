import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGroupVersionInput: _Structure_ = {
  type: "structure",
  required: ["GroupVersionId", "GroupId"],
  members: {
    GroupId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "GroupId"
    },
    GroupVersionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "GroupVersionId"
    }
  }
};
