import { _RoutingStrategy } from "./_RoutingStrategy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Alias: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AliasId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AliasArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    RoutingStrategy: {
      shape: _RoutingStrategy
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdatedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
