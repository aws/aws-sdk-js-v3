import { _PathList } from "./_PathList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Target: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Path: {
      shape: {
        type: "string"
      }
    },
    Exclusions: {
      shape: _PathList
    }
  }
};
