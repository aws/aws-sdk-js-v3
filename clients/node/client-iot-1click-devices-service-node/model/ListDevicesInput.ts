import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDevicesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "deviceType"
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
    }
  }
};
