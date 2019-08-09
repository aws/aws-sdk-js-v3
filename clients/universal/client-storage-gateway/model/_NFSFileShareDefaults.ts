import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NFSFileShareDefaults: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FileMode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DirectoryMode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupId: {
      shape: {
        type: "integer"
      }
    },
    OwnerId: {
      shape: {
        type: "integer"
      }
    }
  }
};
