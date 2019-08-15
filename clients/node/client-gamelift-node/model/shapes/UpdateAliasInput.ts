import { _RoutingStrategy } from "./_RoutingStrategy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAliasInput: _Structure_ = {
  type: "structure",
  required: ["AliasId"],
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
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoutingStrategy: {
      shape: _RoutingStrategy
    }
  }
};
