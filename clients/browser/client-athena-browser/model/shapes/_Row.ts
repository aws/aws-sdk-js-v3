import { _datumList } from "./_datumList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Row: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Data: {
      shape: _datumList
    }
  }
};
