import { List as _List_ } from "@aws-sdk/types";
import { _ThingGroupDocument } from "./_ThingGroupDocument";

export const _ThingGroupDocumentList: _List_ = {
  type: "list",
  member: {
    shape: _ThingGroupDocument
  }
};
