import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActiveDirectoryBackupAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    ActiveDirectoryId: {
      shape: {
        type: "string",
        min: 12
      }
    }
  }
};
