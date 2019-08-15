import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAWSDefaultServiceQuotaInput: _Structure_ = {
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
    }
  }
};
