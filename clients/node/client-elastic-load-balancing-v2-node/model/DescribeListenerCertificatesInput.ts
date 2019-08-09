import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeListenerCertificatesInput: _Structure_ = {
  type: "structure",
  required: ["ListenerArn"],
  members: {
    ListenerArn: {
      shape: {
        type: "string"
      }
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
