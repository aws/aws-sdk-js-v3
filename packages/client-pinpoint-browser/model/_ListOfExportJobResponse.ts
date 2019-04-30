import { List as _List_ } from "@aws-sdk/types";
import { _ExportJobResponse } from "./_ExportJobResponse";

export const _ListOfExportJobResponse: _List_ = {
  type: "list",
  member: {
    shape: _ExportJobResponse
  }
};
