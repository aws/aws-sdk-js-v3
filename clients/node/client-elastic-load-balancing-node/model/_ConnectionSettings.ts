import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConnectionSettings: _Structure_ = {
  type: "structure",
  required: ["IdleTimeout"],
  members: {
    IdleTimeout: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
