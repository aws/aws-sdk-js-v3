import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteInsightInput: _Structure_ = {
  type: "structure",
  required: ["InsightArn"],
  members: {
    InsightArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "InsightArn"
    }
  }
};
