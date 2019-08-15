import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WebsiteCaSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WebsiteCaId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    DisplayName: {
      shape: {
        type: "string"
      }
    }
  }
};
