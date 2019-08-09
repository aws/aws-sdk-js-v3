import { _ResourceList } from "./_ResourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resources: {
      shape: _ResourceList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
