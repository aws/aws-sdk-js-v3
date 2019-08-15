import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3ObjectOwner: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ID: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DisplayName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
