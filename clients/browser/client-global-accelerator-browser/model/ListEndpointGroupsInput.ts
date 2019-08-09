import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEndpointGroupsInput: _Structure_ = {
  type: "structure",
  required: ["ListenerArn"],
  members: {
    ListenerArn: {
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
    }
  }
};
