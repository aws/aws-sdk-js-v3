import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Evaluation: _Structure_ = {
  type: "structure",
  required: [
    "ComplianceResourceType",
    "ComplianceResourceId",
    "ComplianceType",
    "OrderingTimestamp"
  ],
  members: {
    ComplianceResourceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComplianceResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComplianceType: {
      shape: {
        type: "string"
      }
    },
    Annotation: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OrderingTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
