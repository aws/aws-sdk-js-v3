import { _ResourcesResult } from "./_ResourcesResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resources: {
      shape: _ResourcesResult
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
