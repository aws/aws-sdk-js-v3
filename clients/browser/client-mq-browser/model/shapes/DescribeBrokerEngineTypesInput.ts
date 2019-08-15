import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBrokerEngineTypesInput: _Structure_ = {
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
