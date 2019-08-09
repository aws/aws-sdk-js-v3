import { _OpsEntityItemEntryList } from "./_OpsEntityItemEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OpsEntityItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Content: {
      shape: _OpsEntityItemEntryList
    }
  }
};
