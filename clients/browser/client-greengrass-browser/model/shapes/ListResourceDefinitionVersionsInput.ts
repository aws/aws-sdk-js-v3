import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourceDefinitionVersionsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceDefinitionId"],
  members: {
    MaxResults: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "MaxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "NextToken"
    },
    ResourceDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ResourceDefinitionId"
    }
  }
};
