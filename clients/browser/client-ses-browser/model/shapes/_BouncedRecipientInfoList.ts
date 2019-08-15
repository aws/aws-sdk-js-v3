import { List as _List_ } from "@aws-sdk/types";
import { _BouncedRecipientInfo } from "./_BouncedRecipientInfo";

export const _BouncedRecipientInfoList: _List_ = {
  type: "list",
  member: {
    shape: _BouncedRecipientInfo
  }
};
