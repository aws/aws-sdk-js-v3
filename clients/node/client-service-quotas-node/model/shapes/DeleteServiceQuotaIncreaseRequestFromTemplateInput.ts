import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteServiceQuotaIncreaseRequestFromTemplateInput: _Structure_ = {
  type: "structure",
  required: ["ServiceCode", "QuotaCode", "AwsRegion"],
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
    AwsRegion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
