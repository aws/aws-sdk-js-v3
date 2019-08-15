import { ___listOfConnector } from "./___listOfConnector";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConnectorDefinitionVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Connectors: {
      shape: ___listOfConnector
    }
  }
};
