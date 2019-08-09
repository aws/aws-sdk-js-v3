import { _CommandList } from "./_CommandList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCommandsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Commands: {
      shape: _CommandList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
