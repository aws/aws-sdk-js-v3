import { Map as _Map_ } from "@aws-sdk/types";
import { _ReasonForNonComplianceCodes } from "./_ReasonForNonComplianceCodes";

export const _AuditCheckToReasonCodeFilter: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _ReasonForNonComplianceCodes
  }
};
