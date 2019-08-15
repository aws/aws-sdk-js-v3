import { List as _List_ } from "@aws-sdk/types";
import { _FailedServiceActionAssociation } from "./_FailedServiceActionAssociation";

export const _FailedServiceActionAssociations: _List_ = {
  type: "list",
  member: {
    shape: _FailedServiceActionAssociation
  }
};
