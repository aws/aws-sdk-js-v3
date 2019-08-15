import { _Flow } from "./_Flow";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFlowOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Flow: {
      shape: _Flow,
      locationName: "flow"
    }
  }
};
