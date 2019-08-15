import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInsightOutput: _Structure_ = {
  type: "structure",
  required: ["InsightArn"],
  members: {
    InsightArn: {
      shape: {
        type: "string"
      }
    }
  }
};
