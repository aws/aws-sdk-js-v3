import { _CommandFilterList } from "./_CommandFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCommandsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CommandId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _CommandFilterList
    }
  }
};
