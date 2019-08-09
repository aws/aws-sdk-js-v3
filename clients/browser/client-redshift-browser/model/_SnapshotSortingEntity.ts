import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SnapshotSortingEntity: _Structure_ = {
  type: "structure",
  required: ["Attribute"],
  members: {
    Attribute: {
      shape: {
        type: "string"
      }
    },
    SortOrder: {
      shape: {
        type: "string"
      }
    }
  }
};
