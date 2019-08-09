import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteResourceDataSyncInput: _Structure_ = {
  type: "structure",
  required: ["SyncName"],
  members: {
    SyncName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
