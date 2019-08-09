import { _Group } from "./_Group";
import { _ResourceQuery } from "./_ResourceQuery";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Group: {
      shape: _Group
    },
    ResourceQuery: {
      shape: _ResourceQuery
    },
    Tags: {
      shape: _Tags
    }
  }
};
