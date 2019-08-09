import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuthorizerSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    authorizerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    authorizerArn: {
      shape: {
        type: "string"
      }
    }
  }
};
