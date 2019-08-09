import { Map as _Map_ } from "@aws-sdk/types";
import { _AuditCheckDetails } from "./_AuditCheckDetails";

export const _AuditDetails: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _AuditCheckDetails
  }
};
