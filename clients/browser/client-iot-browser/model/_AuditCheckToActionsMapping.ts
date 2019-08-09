import { Map as _Map_ } from "@aws-sdk/types";
import { _MitigationActionNameList } from "./_MitigationActionNameList";

export const _AuditCheckToActionsMapping: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _MitigationActionNameList
  }
};
