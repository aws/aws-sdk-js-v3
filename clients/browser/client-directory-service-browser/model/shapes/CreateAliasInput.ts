import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAliasInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "Alias"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    Alias: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
