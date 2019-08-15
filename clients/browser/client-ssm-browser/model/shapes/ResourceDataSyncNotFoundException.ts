import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceDataSyncNotFoundException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SyncName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "ResourceDataSyncNotFoundException"
};
