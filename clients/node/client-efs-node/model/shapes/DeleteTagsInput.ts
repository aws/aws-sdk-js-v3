import { _TagKeys } from "./_TagKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTagsInput: _Structure_ = {
  type: "structure",
  required: ["FileSystemId", "TagKeys"],
  members: {
    FileSystemId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "FileSystemId"
    },
    TagKeys: {
      shape: _TagKeys
    }
  }
};
