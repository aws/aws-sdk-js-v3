import { _PrivateLinkConfig } from "./_PrivateLinkConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAgentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AgentArn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    LastConnectionTime: {
      shape: {
        type: "timestamp"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndpointType: {
      shape: {
        type: "string"
      }
    },
    PrivateLinkConfig: {
      shape: _PrivateLinkConfig
    }
  }
};
