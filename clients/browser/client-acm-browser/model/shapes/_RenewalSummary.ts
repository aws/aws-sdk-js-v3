import { _DomainValidationList } from "./_DomainValidationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RenewalSummary: _Structure_ = {
  type: "structure",
  required: ["RenewalStatus", "DomainValidationOptions", "UpdatedAt"],
  members: {
    RenewalStatus: {
      shape: {
        type: "string"
      }
    },
    DomainValidationOptions: {
      shape: _DomainValidationList
    },
    RenewalStatusReason: {
      shape: {
        type: "string"
      }
    },
    UpdatedAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
