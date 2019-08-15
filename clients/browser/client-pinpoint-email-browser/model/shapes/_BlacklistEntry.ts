import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BlacklistEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RblName: {
      shape: {
        type: "string"
      }
    },
    ListingTime: {
      shape: {
        type: "timestamp"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
