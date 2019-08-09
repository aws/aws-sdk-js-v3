import { _Input } from "./_Input";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInputOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Input: {
      shape: _Input,
      locationName: "input"
    }
  }
};
