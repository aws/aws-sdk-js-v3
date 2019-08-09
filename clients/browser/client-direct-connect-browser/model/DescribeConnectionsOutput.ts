import { _ConnectionList } from "./_ConnectionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConnectionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    connections: {
      shape: _ConnectionList
    }
  }
};
