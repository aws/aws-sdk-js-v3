import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ADMChannelRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientId: {
      shape: {
        type: "string"
      }
    },
    ClientSecret: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
