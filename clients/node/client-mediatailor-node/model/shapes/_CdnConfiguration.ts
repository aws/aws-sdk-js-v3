import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CdnConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdSegmentUrlPrefix: {
      shape: {
        type: "string"
      }
    },
    ContentSegmentUrlPrefix: {
      shape: {
        type: "string"
      }
    }
  }
};
