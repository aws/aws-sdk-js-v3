import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OTAUpdateSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    otaUpdateId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    otaUpdateArn: {
      shape: {
        type: "string"
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
