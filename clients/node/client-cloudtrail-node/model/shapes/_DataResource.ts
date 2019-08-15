import { _DataResourceValues } from "./_DataResourceValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataResource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _DataResourceValues
    }
  }
};
