import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrustedAdvisorCheckRefreshStatus: _Structure_ = {
  type: "structure",
  required: ["checkId", "status", "millisUntilNextRefreshable"],
  members: {
    checkId: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    millisUntilNextRefreshable: {
      shape: {
        type: "integer"
      }
    }
  }
};
