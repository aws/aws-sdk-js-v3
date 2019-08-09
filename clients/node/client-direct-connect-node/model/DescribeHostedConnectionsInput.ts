import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHostedConnectionsInput: _Structure_ = {
  type: "structure",
  required: ["connectionId"],
  members: {
    connectionId: {
      shape: {
        type: "string"
      }
    }
  }
};
