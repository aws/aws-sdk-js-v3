import { _NamedQueryList } from "./_NamedQueryList";
import { _UnprocessedNamedQueryIdList } from "./_UnprocessedNamedQueryIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetNamedQueryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NamedQueries: {
      shape: _NamedQueryList
    },
    UnprocessedNamedQueryIds: {
      shape: _UnprocessedNamedQueryIdList
    }
  }
};
