import { Map as _Map_ } from "@aws-sdk/types";
import { _TaskStatisticsForAuditCheck } from "./_TaskStatisticsForAuditCheck";

export const _AuditMitigationActionsTaskStatistics: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _TaskStatisticsForAuditCheck
  }
};
