import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointConfigSummary: _Structure_ = {
  type: "structure",
  required: ["EndpointConfigName", "EndpointConfigArn", "CreationTime"],
  members: {
    EndpointConfigName: {
      shape: {
        type: "string"
      }
    },
    EndpointConfigArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
