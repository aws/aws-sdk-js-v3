import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFolderInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "folderPath"],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    commitSpecifier: {
      shape: {
        type: "string"
      }
    },
    folderPath: {
      shape: {
        type: "string"
      }
    }
  }
};
