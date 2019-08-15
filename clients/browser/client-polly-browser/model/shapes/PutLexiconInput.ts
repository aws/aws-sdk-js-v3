import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutLexiconInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Content"],
  members: {
    Name: {
      shape: {
        type: "string",
        sensitive: true
      },
      location: "uri",
      locationName: "LexiconName"
    },
    Content: {
      shape: {
        type: "string"
      }
    }
  }
};
