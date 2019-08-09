import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTaskSetsInput: _Structure_ = {
  type: "structure",
  required: ["cluster", "service"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    service: {
      shape: {
        type: "string"
      }
    },
    taskSets: {
      shape: _StringList
    }
  }
};
