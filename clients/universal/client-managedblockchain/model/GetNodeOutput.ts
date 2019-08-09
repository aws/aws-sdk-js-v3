import { _Node } from "./_Node";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetNodeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Node: {
      shape: _Node
    }
  }
};
