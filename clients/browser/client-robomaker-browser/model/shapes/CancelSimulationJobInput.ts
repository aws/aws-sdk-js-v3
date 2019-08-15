import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelSimulationJobInput: _Structure_ = {
  type: "structure",
  required: ["job"],
  members: {
    job: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
