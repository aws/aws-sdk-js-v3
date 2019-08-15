import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainIspPlacement: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IspName: {
      shape: {
        type: "string"
      }
    },
    InboxRawCount: {
      shape: {
        type: "integer"
      }
    },
    SpamRawCount: {
      shape: {
        type: "integer"
      }
    },
    InboxPercentage: {
      shape: {
        type: "float"
      }
    },
    SpamPercentage: {
      shape: {
        type: "float"
      }
    }
  }
};
