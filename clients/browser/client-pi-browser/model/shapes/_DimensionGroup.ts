import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DimensionGroup: _Structure_ = {
  type: "structure",
  required: ["Group"],
  members: {
    Group: {
      shape: {
        type: "string"
      }
    },
    Dimensions: {
      shape: _StringList
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
