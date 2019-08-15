import { Structure as _Structure_ } from "@aws-sdk/types";

export const BulkPublishOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
