import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetJobRunInput: _Structure_ = {
  type: "structure",
  required: ["JobName", "RunId"],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RunId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PredecessorsIncluded: {
      shape: {
        type: "boolean"
      }
    }
  }
};
