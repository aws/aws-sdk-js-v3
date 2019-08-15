import { _MetricInfo } from "./_MetricInfo";
import { _QuotaPeriod } from "./_QuotaPeriod";
import { _ErrorReason } from "./_ErrorReason";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceQuota: _Structure_ = {
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
    QuotaArn: {
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
    Value: {
      shape: {
        type: "float"
      }
    },
    Unit: {
      shape: {
        type: "string"
      }
    },
    Adjustable: {
      shape: {
        type: "boolean"
      }
    },
    GlobalQuota: {
      shape: {
        type: "boolean"
      }
    },
    UsageMetric: {
      shape: _MetricInfo
    },
    Period: {
      shape: _QuotaPeriod
    },
    ErrorReason: {
      shape: _ErrorReason
    }
  }
};
