import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestConnectionInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationInstanceArn", "EndpointArn"],
  members: {
    ReplicationInstanceArn: {
      shape: {
        type: "string"
      }
    },
    EndpointArn: {
      shape: {
        type: "string"
      }
    }
  }
};
