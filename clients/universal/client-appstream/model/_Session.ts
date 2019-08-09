import { _NetworkAccessConfiguration } from "./_NetworkAccessConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Session: _Structure_ = {
  type: "structure",
  required: ["Id", "UserId", "StackName", "FleetName", "State"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserId: {
      shape: {
        type: "string",
        min: 2
      }
    },
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FleetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    ConnectionState: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    MaxExpirationTime: {
      shape: {
        type: "timestamp"
      }
    },
    AuthenticationType: {
      shape: {
        type: "string"
      }
    },
    NetworkAccessConfiguration: {
      shape: _NetworkAccessConfiguration
    }
  }
};
