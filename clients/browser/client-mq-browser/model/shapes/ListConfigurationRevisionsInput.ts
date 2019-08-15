import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConfigurationRevisionsInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationId"],
  members: {
    ConfigurationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "configuration-id"
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
