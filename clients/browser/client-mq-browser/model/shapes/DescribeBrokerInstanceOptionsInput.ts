import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBrokerInstanceOptionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EngineType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "engineType"
    },
    HostInstanceType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "hostInstanceType"
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
