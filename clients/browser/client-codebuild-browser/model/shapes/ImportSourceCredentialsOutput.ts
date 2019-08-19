import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportSourceCredentialsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
