import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCoreDefinitionVersionsInput: _Structure_ = {
  type: "structure",
  required: ["CoreDefinitionId"],
  members: {
    CoreDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "CoreDefinitionId"
    },
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
    }
  }
};
