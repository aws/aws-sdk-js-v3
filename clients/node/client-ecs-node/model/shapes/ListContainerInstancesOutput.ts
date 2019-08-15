import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListContainerInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    containerInstanceArns: {
      shape: _StringList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
