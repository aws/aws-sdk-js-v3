import { _SystemTemplateSummaries } from "./_SystemTemplateSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSystemTemplateRevisionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    summaries: {
      shape: _SystemTemplateSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
