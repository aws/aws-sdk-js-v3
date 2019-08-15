import { _JobListDescriptorList } from "./_JobListDescriptorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Jobs: {
      shape: _JobListDescriptorList
    }
  }
};
