import { _ReadersArnList } from "./_ReadersArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GlobalClusterMember: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterArn: {
      shape: {
        type: "string"
      }
    },
    Readers: {
      shape: _ReadersArnList
    },
    IsWriter: {
      shape: {
        type: "boolean"
      }
    }
  }
};
