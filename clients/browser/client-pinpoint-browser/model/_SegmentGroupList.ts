import { _ListOfSegmentGroup } from "./_ListOfSegmentGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SegmentGroupList: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Groups: {
      shape: _ListOfSegmentGroup
    },
    Include: {
      shape: {
        type: "string"
      }
    }
  }
};
