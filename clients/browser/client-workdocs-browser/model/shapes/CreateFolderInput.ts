import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFolderInput: _Structure_ = {
  type: "structure",
  required: ["ParentFolderId"],
  members: {
    AuthenticationToken: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "header",
      locationName: "Authentication"
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ParentFolderId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
