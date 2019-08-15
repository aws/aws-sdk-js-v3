import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAliasOutput: _Structure_ = {
  type: "structure",
  required: [],
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
