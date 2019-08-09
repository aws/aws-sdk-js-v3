import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStorageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TotalBackupSizeInMegaBytes: {
      shape: {
        type: "float"
      }
    },
    TotalProvisionedStorageInMegaBytes: {
      shape: {
        type: "float"
      }
    }
  }
};
