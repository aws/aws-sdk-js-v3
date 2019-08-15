import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Radios: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    wifi: {
      shape: {
        type: "boolean"
      }
    },
    bluetooth: {
      shape: {
        type: "boolean"
      }
    },
    nfc: {
      shape: {
        type: "boolean"
      }
    },
    gps: {
      shape: {
        type: "boolean"
      }
    }
  }
};
