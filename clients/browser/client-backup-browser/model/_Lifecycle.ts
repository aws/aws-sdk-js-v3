import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Lifecycle: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MoveToColdStorageAfterDays: {
      shape: {
        type: "integer"
      }
    },
    DeleteAfterDays: {
      shape: {
        type: "integer"
      }
    }
  }
};
