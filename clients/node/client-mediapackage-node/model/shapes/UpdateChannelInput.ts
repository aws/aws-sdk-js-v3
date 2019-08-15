import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateChannelInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "id"
    }
  }
};
