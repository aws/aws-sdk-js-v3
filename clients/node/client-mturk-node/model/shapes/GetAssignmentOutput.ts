import { _Assignment } from "./_Assignment";
import { _HIT } from "./_HIT";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAssignmentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Assignment: {
      shape: _Assignment
    },
    HIT: {
      shape: _HIT
    }
  }
};
