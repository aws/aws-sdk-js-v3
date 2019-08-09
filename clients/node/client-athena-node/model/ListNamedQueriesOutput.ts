import { _NamedQueryIdList } from "./_NamedQueryIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListNamedQueriesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NamedQueryIds: {
      shape: _NamedQueryIdList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
