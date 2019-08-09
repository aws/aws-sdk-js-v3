import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IPRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    CIDRIP: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
