import { List as _List_ } from "@aws-sdk/types";
import { _AttachmentsSource } from "./_AttachmentsSource";

export const _AttachmentsSourceList: _List_ = {
  type: "list",
  member: {
    shape: _AttachmentsSource
  }
};
