import { List as _List_ } from "@aws-sdk/types";
import { _ComplianceByResource } from "./_ComplianceByResource";

export const _ComplianceByResources: _List_ = {
  type: "list",
  member: {
    shape: _ComplianceByResource
  }
};
