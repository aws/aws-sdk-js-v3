import { _GroupType } from "./_GroupType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Group: {
      shape: _GroupType
    }
  }
};
