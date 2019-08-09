import { List as _List_ } from "@aws-sdk/types";
import { _FaceRecord } from "./_FaceRecord";

export const _FaceRecordList: _List_ = {
  type: "list",
  member: {
    shape: _FaceRecord
  }
};
