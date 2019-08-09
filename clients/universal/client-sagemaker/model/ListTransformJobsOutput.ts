import { _TransformJobSummaries } from "./_TransformJobSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTransformJobsOutput: _Structure_ = {
  type: "structure",
  required: ["TransformJobSummaries"],
  members: {
    TransformJobSummaries: {
      shape: _TransformJobSummaries
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
