import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTagsInput: _Structure_ = {
  type: "structure",
  required: ["FileSystemId", "Tags"],
  members: {
    FileSystemId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "FileSystemId"
    },
    Tags: {
      shape: _Tags
    }
  }
};
