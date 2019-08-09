import { _PatchList } from "./_PatchList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAvailablePatchesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Patches: {
      shape: _PatchList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
