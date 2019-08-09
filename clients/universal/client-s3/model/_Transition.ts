import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Transition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Date: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    Days: {
      shape: {
        type: "integer"
      }
    },
    StorageClass: {
      shape: {
        type: "string"
      }
    }
  }
};
