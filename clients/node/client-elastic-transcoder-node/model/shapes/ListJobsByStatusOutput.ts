import { _Jobs } from "./_Jobs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsByStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Jobs: {
      shape: _Jobs
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
