import { List as _List_ } from "@aws-sdk/types";
import { _ImageIdentifier } from "./_ImageIdentifier";

export const _ImageIdentifierList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ImageIdentifier
  }
};
