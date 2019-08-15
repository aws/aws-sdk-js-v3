import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBotVersionInput: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "name"
    },
    checksum: {
      shape: {
        type: "string"
      }
    }
  }
};
