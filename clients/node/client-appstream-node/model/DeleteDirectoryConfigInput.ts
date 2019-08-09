import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDirectoryConfigInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryName"],
  members: {
    DirectoryName: {
      shape: {
        type: "string"
      }
    }
  }
};
