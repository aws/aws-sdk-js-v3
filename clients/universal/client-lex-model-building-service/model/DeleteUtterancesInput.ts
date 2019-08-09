import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUtterancesInput: _Structure_ = {
  type: "structure",
  required: ["botName", "userId"],
  members: {
    botName: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "botName"
    },
    userId: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "userId"
    }
  }
};
