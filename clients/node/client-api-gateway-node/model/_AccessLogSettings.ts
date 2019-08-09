import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccessLogSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    format: {
      shape: {
        type: "string"
      }
    },
    destinationArn: {
      shape: {
        type: "string"
      }
    }
  }
};
