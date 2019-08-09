import { _DiskIds } from "./_DiskIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUploadBufferOutput: _Structure_ = {
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
    UploadBufferUsedInBytes: {
      shape: {
        type: "integer"
      }
    },
    UploadBufferAllocatedInBytes: {
      shape: {
        type: "integer"
      }
    }
  }
};
