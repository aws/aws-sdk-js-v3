import { _ConnectorList } from "./_ConnectorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConnectorsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    connectorList: {
      shape: _ConnectorList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
