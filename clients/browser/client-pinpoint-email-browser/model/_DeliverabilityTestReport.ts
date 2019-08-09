import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeliverabilityTestReport: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReportId: {
      shape: {
        type: "string"
      }
    },
    ReportName: {
      shape: {
        type: "string"
      }
    },
    Subject: {
      shape: {
        type: "string"
      }
    },
    FromEmailAddress: {
      shape: {
        type: "string"
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    DeliverabilityTestStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
