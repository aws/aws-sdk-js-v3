import { _ResourceDataSyncItemList } from "./_ResourceDataSyncItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourceDataSyncOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceDataSyncItems: {
      shape: _ResourceDataSyncItemList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
