import { _RoutingStrategy } from "./_RoutingStrategy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAliasInput: _Structure_ = {
  type: "structure",
  required: ["Name", "RoutingStrategy"],
  members: {
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
