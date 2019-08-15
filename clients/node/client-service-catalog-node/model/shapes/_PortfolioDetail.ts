import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PortfolioDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DisplayName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    ProviderName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
