import { _PlatformFilterValueList } from "./_PlatformFilterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlatformFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Operator: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _PlatformFilterValueList
    }
  }
};
