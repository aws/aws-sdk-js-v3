import { List as _List_ } from "@aws-sdk/types";
import { _DocumentVersionInfo } from "./_DocumentVersionInfo";

export const _DocumentVersionList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _DocumentVersionInfo
  }
};
