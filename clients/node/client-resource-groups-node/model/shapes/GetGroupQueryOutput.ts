import { _GroupQuery } from "./_GroupQuery";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGroupQueryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupQuery: {
      shape: _GroupQuery
    }
  }
};
