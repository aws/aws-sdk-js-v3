import { List as _List_ } from "@aws-sdk/types";
import { _DesiredPlayerSession } from "./_DesiredPlayerSession";

export const _DesiredPlayerSessionList: _List_ = {
  type: "list",
  member: {
    shape: _DesiredPlayerSession
  }
};
