import { _JobNameList } from "./_JobNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobNames: {
      shape: _JobNameList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
