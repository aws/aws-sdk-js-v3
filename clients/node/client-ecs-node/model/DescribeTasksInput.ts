import { _StringList } from "./_StringList";
import { _TaskFieldList } from "./_TaskFieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTasksInput: _Structure_ = {
  type: "structure",
  required: ["tasks"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    tasks: {
      shape: _StringList
    },
    include: {
      shape: _TaskFieldList
    }
  }
};
