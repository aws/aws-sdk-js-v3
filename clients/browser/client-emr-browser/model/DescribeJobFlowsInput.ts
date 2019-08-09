import { _XmlStringList } from "./_XmlStringList";
import { _JobFlowExecutionStateList } from "./_JobFlowExecutionStateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeJobFlowsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreatedAfter: {
      shape: {
        type: "timestamp"
      }
    },
    CreatedBefore: {
      shape: {
        type: "timestamp"
      }
    },
    JobFlowIds: {
      shape: _XmlStringList
    },
    JobFlowStates: {
      shape: _JobFlowExecutionStateList
    }
  }
};
