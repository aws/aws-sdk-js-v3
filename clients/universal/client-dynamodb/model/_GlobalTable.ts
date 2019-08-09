import { _ReplicaList } from "./_ReplicaList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GlobalTable: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GlobalTableName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    ReplicationGroup: {
      shape: _ReplicaList
    }
  }
};
