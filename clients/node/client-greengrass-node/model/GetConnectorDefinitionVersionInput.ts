import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConnectorDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["ConnectorDefinitionId", "ConnectorDefinitionVersionId"],
  members: {
    ConnectorDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ConnectorDefinitionId"
    },
    ConnectorDefinitionVersionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ConnectorDefinitionVersionId"
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
