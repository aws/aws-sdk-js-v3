import { _ListenerArns } from "./_ListenerArns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeListenersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancerArn: {
      shape: {
        type: "string"
      }
    },
    ListenerArns: {
      shape: _ListenerArns
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    PageSize: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
