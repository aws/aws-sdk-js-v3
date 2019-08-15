import { _JobNameList } from "./_JobNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetJobsInput: _Structure_ = {
  type: "structure",
  required: ["JobNames"],
  members: {
    JobNames: {
      shape: _JobNameList
    }
  }
};
