import { List as _List_ } from "@aws-sdk/types";
import { _ThingDocument } from "./_ThingDocument";

export const _ThingDocumentList: _List_ = {
  type: "list",
  member: {
    shape: _ThingDocument
  }
};
