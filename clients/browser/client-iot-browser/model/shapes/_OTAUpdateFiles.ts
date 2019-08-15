import { List as _List_ } from "@aws-sdk/types";
import { _OTAUpdateFile } from "./_OTAUpdateFile";

export const _OTAUpdateFiles: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _OTAUpdateFile
  }
};
