import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBotVersionInput: _Structure_ = {
  type: "structure",
  required: ["name", "version"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "name"
    },
    version: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "version"
    }
  }
};
