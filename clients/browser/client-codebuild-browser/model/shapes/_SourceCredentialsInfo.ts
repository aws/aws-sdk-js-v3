import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceCredentialsInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    serverType: {
      shape: {
        type: "string"
      }
    },
    authType: {
      shape: {
        type: "string"
      }
    }
  }
};
