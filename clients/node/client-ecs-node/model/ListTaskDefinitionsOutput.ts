import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTaskDefinitionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskDefinitionArns: {
      shape: _StringList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
