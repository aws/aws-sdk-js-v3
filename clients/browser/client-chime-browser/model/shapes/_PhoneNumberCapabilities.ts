import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PhoneNumberCapabilities: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InboundCall: {
      shape: {
        type: "boolean"
      }
    },
    OutboundCall: {
      shape: {
        type: "boolean"
      }
    },
    InboundSMS: {
      shape: {
        type: "boolean"
      }
    },
    OutboundSMS: {
      shape: {
        type: "boolean"
      }
    },
    InboundMMS: {
      shape: {
        type: "boolean"
      }
    },
    OutboundMMS: {
      shape: {
        type: "boolean"
      }
    }
  }
};
