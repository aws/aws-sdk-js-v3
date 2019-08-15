import { _DBParameterGroup } from "./_DBParameterGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyDBParameterGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBParameterGroup: {
      shape: _DBParameterGroup
    }
  }
};
