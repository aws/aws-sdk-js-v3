import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListElasticsearchInstanceTypesInput: _Structure_ = {
  type: "structure",
  required: ["ElasticsearchVersion"],
  members: {
    ElasticsearchVersion: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ElasticsearchVersion"
    },
    DomainName: {
      shape: {
        type: "string",
        min: 3
      },
      location: "querystring",
      locationName: "domainName"
    },
    MaxResults: {
      shape: {
        type: "integer"
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
