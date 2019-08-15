import { _ConnectorCapabilityList } from "./_ConnectorCapabilityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Connector: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    connectorId: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    capabilityList: {
      shape: _ConnectorCapabilityList
    },
    vmManagerName: {
      shape: {
        type: "string"
      }
    },
    vmManagerType: {
      shape: {
        type: "string"
      }
    },
    vmManagerId: {
      shape: {
        type: "string"
      }
    },
    ipAddress: {
      shape: {
        type: "string"
      }
    },
    macAddress: {
      shape: {
        type: "string"
      }
    },
    associatedOn: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
