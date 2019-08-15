import { Structure as _Structure_ } from "@aws-sdk/types";

export const RequestServiceQuotaIncreaseInput: _Structure_ = {
  type: "structure",
  required: ["ServiceCode", "QuotaCode", "DesiredValue"],
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
    DesiredValue: {
      shape: {
        type: "float"
      }
    }
  }
};
