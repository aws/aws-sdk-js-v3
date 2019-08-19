import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainSummary: _Structure_ = {
  type: "structure",
  required: ["DomainName", "CreatedTime", "DomainStatus"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DisplayName: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    DomainStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
