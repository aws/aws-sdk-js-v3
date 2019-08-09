import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRequestedServiceQuotaChangeHistoryByQuotaInput: _Structure_ = {
  type: "structure",
  required: ["ServiceCode", "QuotaCode"],
  members: {
    ServiceCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    QuotaCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
