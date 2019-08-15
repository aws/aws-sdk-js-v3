import { Structure as _Structure_ } from "@aws-sdk/types";

export const SampleChannelDataInput: _Structure_ = {
  type: "structure",
  required: ["channelName"],
  members: {
    channelName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "channelName"
    },
    maxMessages: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxMessages"
    },
    startTime: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "startTime"
    },
    endTime: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "endTime"
    }
  }
};
