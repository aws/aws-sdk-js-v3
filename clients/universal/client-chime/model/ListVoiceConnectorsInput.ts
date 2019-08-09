import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVoiceConnectorsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "next-token"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "max-results"
    }
  }
};
