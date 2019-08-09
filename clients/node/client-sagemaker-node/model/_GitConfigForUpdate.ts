import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GitConfigForUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecretArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
