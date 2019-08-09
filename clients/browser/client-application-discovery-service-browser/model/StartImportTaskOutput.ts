import { _ImportTask } from "./_ImportTask";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartImportTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    task: {
      shape: _ImportTask
    }
  }
};
