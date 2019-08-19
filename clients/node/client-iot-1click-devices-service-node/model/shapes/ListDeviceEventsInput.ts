import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeviceEventsInput: _Structure_ = {
  type: "structure",
  required: ["DeviceId", "FromTimeStamp", "ToTimeStamp"],
  members: {
    DeviceId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "deviceId"
    },
    FromTimeStamp: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      location: "querystring",
      locationName: "fromTimeStamp"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    ToTimeStamp: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      location: "querystring",
      locationName: "toTimeStamp"
    }
  }
};
