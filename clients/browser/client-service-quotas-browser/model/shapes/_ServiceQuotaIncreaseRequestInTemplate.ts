import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceQuotaIncreaseRequestInTemplate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceName: {
      shape: {
        type: "string"
      }
    },
    QuotaCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    QuotaName: {
      shape: {
        type: "string"
      }
    },
    DesiredValue: {
      shape: {
        type: "float"
      }
    },
    AwsRegion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Unit: {
      shape: {
        type: "string"
      }
    },
    GlobalQuota: {
      shape: {
        type: "boolean"
      }
    }
  }
};
