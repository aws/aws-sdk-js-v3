import { _InstanceAccess } from "./_InstanceAccess";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstanceAccessOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceAccess: {
      shape: _InstanceAccess
    }
  }
};
