import { _CodeGenNodeArgs } from "./_CodeGenNodeArgs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Location: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Jdbc: {
      shape: _CodeGenNodeArgs
    },
    S3: {
      shape: _CodeGenNodeArgs
    },
    DynamoDB: {
      shape: _CodeGenNodeArgs
    }
  }
};
