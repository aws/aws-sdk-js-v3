import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatasetEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    entryName: {
      shape: {
        type: "string"
      }
    },
    dataURI: {
      shape: {
        type: "string"
      }
    }
  }
};
