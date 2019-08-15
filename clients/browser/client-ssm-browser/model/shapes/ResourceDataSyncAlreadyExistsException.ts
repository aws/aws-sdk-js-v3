import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceDataSyncAlreadyExistsException: _Structure_ = {
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
  exceptionType: "ResourceDataSyncAlreadyExistsException"
};
