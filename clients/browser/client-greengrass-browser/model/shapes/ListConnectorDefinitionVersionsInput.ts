import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConnectorDefinitionVersionsInput: _Structure_ = {
  type: "structure",
  required: ["ConnectorDefinitionId"],
  members: {
    ConnectorDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ConnectorDefinitionId"
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
