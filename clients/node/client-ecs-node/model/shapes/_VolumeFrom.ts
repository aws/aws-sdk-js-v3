import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeFrom: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    sourceContainer: {
      shape: {
        type: "string"
      }
    },
    readOnly: {
      shape: {
        type: "boolean"
      }
    }
  }
};
