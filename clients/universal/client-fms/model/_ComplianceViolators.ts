import { List as _List_ } from "@aws-sdk/types";
import { _ComplianceViolator } from "./_ComplianceViolator";

export const _ComplianceViolators: _List_ = {
  type: "list",
  member: {
    shape: _ComplianceViolator
  }
};
