import { List as _List_ } from "@aws-sdk/types";
import { _DomainAssociation } from "./_DomainAssociation";

export const _DomainAssociations: _List_ = {
  type: "list",
  member: {
    shape: _DomainAssociation
  }
};
