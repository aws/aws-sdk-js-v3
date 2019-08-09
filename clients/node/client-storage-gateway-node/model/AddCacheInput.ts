import { _DiskIds } from "./_DiskIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddCacheInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN", "DiskIds"],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    DiskIds: {
      shape: _DiskIds
    }
  }
};
