import { _EngineAttributes } from "./_EngineAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExportServerEngineAttributeInput: _Structure_ = {
  type: "structure",
  required: ["ExportAttributeName", "ServerName"],
  members: {
    ExportAttributeName: {
      shape: {
        type: "string"
      }
    },
    ServerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InputAttributes: {
      shape: _EngineAttributes
    }
  }
};
