import { List as _List_ } from "@aws-sdk/types";
import { _ExportInfo } from "./_ExportInfo";

export const _ExportsInfo: _List_ = {
  type: "list",
  member: {
    shape: _ExportInfo
  }
};
