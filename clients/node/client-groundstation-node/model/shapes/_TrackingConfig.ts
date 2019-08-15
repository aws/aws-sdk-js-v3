import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrackingConfig: _Structure_ = {
  type: "structure",
  required: ["autotrack"],
  members: {
    autotrack: {
      shape: {
        type: "string"
      }
    }
  }
};
