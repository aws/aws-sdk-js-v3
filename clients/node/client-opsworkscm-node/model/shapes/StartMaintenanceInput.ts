import { _EngineAttributes } from "./_EngineAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartMaintenanceInput: _Structure_ = {
  type: "structure",
  required: ["ServerName"],
  members: {
    ServerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EngineAttributes: {
      shape: _EngineAttributes
    }
  }
};
