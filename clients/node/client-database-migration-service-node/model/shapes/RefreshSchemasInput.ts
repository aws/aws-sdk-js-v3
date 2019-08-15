import { Structure as _Structure_ } from "@aws-sdk/types";

export const RefreshSchemasInput: _Structure_ = {
  type: "structure",
  required: ["EndpointArn", "ReplicationInstanceArn"],
  members: {
    EndpointArn: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstanceArn: {
      shape: {
        type: "string"
      }
    }
  }
};
