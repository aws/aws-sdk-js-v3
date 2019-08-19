import { _Instance } from "./_Instance";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instance: {
      shape: _Instance
    }
  }
};
