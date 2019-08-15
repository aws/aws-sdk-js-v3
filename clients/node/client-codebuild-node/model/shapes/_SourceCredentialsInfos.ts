import { List as _List_ } from "@aws-sdk/types";
import { _SourceCredentialsInfo } from "./_SourceCredentialsInfo";

export const _SourceCredentialsInfos: _List_ = {
  type: "list",
  member: {
    shape: _SourceCredentialsInfo
  }
};
