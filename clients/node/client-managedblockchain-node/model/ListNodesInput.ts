import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListNodesInput: _Structure_ = {
  type: "structure",
  required: ["NetworkId", "MemberId"],
  members: {
    NetworkId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "networkId"
    },
    MemberId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "memberId"
    },
    Status: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "status"
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
