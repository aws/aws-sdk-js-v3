import { _WorkGroup } from "./_WorkGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWorkGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WorkGroup: {
      shape: _WorkGroup
    }
  }
};
