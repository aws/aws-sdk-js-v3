import { _Permissions } from "./_Permissions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineOutputConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bucket: {
      shape: {
        type: "string"
      }
    },
    StorageClass: {
      shape: {
        type: "string"
      }
    },
    Permissions: {
      shape: _Permissions
    }
  }
};
