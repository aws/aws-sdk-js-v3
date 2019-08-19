import { List as _List_ } from "@aws-sdk/types";
import { _AggregateResourceIdentifier } from "./_AggregateResourceIdentifier";

export const _DiscoveredResourceIdentifierList: _List_ = {
  type: "list",
  member: {
    shape: _AggregateResourceIdentifier
  }
};
