import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConnectorDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["ConnectorDefinitionId"],
  members: {
    ConnectorDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ConnectorDefinitionId"
    }
  }
};
