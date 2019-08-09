import { _DiskIds } from "./_DiskIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkingStorageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    DiskIds: {
      shape: _DiskIds
    },
    WorkingStorageUsedInBytes: {
      shape: {
        type: "integer"
      }
    },
    WorkingStorageAllocatedInBytes: {
      shape: {
        type: "integer"
      }
    }
  }
};
