import { Map as _Map_ } from "@aws-sdk/types";
import { _AuditNotificationTarget } from "./_AuditNotificationTarget";

export const _AuditNotificationTargetConfigurations: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _AuditNotificationTarget
  }
};
