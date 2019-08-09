import { ___listOfConnector } from "./___listOfConnector";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConnectorDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["ConnectorDefinitionId"],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    ConnectorDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ConnectorDefinitionId"
    },
    Connectors: {
      shape: ___listOfConnector
    }
  }
};
