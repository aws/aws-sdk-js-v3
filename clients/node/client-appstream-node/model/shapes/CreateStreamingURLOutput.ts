import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStreamingURLOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamingURL: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Expires: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
