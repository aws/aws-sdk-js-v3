import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBotInput: _Structure_ = {
  type: "structure",
  required: ["name", "versionOrAlias"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "name"
    },
    versionOrAlias: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "versionoralias"
    }
  }
};
