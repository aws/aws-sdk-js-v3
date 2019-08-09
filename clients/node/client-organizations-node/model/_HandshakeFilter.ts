import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HandshakeFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActionType: {
      shape: {
        type: "string"
      }
    },
    ParentHandshakeId: {
      shape: {
        type: "string"
      }
    }
  }
};
