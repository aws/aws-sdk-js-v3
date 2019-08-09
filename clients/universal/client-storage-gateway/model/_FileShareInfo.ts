import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FileShareInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FileShareType: {
      shape: {
        type: "string"
      }
    },
    FileShareARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    FileShareId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    FileShareStatus: {
      shape: {
        type: "string",
        min: 3
      }
    },
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};
