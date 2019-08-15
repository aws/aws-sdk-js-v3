import { List as _List_ } from "@aws-sdk/types";
import { _AggregateResourceIdentifier } from "./_AggregateResourceIdentifier";

export const _ResourceIdentifiersList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _AggregateResourceIdentifier
  }
};
