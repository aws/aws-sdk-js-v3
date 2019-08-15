import { _NamedQueryIdList } from "./_NamedQueryIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetNamedQueryInput: _Structure_ = {
  type: "structure",
  required: ["NamedQueryIds"],
  members: {
    NamedQueryIds: {
      shape: _NamedQueryIdList
    }
  }
};
