import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccessLogSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DestinationArn: {
      shape: {
        type: "string"
      },
      locationName: "destinationArn"
    },
    Format: {
      shape: {
        type: "string"
      },
      locationName: "format"
    }
  }
};
