import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutServiceQuotaIncreaseRequestIntoTemplateInput: _Structure_ = {
  type: "structure",
  required: ["QuotaCode", "ServiceCode", "AwsRegion", "DesiredValue"],
  members: {
    QuotaCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceCode: {
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
    },
    DesiredValue: {
      shape: {
        type: "float"
      }
    }
  }
};
