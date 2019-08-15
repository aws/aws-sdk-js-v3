import { _EngineAttributes } from "./_EngineAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateNodeInput: _Structure_ = {
  type: "structure",
  required: ["ServerName", "NodeName", "EngineAttributes"],
  members: {
    ServerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NodeName: {
      shape: {
        type: "string"
      }
    },
    EngineAttributes: {
      shape: _EngineAttributes
    }
  }
};
