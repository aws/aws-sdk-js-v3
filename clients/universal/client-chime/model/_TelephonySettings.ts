import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TelephonySettings: _Structure_ = {
  type: "structure",
  required: ["InboundCalling", "OutboundCalling", "SMS"],
  members: {
    InboundCalling: {
      shape: {
        type: "boolean"
      }
    },
    OutboundCalling: {
      shape: {
        type: "boolean"
      }
    },
    SMS: {
      shape: {
        type: "boolean"
      }
    }
  }
};
