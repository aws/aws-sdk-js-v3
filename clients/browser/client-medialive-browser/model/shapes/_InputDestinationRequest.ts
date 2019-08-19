import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputDestinationRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamName: {
      shape: {
        type: "string"
      },
      locationName: "streamName"
    }
  }
};
