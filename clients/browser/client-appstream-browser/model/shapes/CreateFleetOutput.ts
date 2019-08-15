import { _Fleet } from "./_Fleet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFleetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Fleet: {
      shape: _Fleet
    }
  }
};
