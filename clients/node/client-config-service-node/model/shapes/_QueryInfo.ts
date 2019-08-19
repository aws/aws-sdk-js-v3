import { _FieldInfoList } from "./_FieldInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SelectFields: {
      shape: _FieldInfoList
    }
  }
};
